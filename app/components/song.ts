import Component from '@glimmer/component';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { startsWithMap, DrumPad, drumPadMap } from 'band-songs/utils/songs';
import { action } from '@ember/object';
import { updateDoc, onSnapshot, type DocumentSnapshot, type Unsubscribe } from 'firebase/firestore';
import { User } from 'band-songs/controllers/application';
import { TabSource } from 'band-songs/utils/songs';

import type { Song } from 'band-songs/utils/songs';
import type { EuiCardSignature } from '@ember-eui/core/components/eui-card';
import type { EuiButtonIconSignature } from '@ember-eui/core/components/eui-button-icon';

type Note = {
    icon: string;
    text: string;
};

type ButtonConfig = Pick<EuiButtonIconSignature['Args'], 'color' | 'iconType'> & {
    text: string;
    click: VoidFunction;
};

export interface SongCardSignature {
    Element: EuiCardSignature['Element'];
    Args: {
        user: User;
        song: DocumentSnapshot<Song>;
        cacheScroll?: VoidFunction;
        tabSource?: TabSource;
    };
}

export default class SongCard extends Component<SongCardSignature> {
    @service declare router: ServiceRegistry['router'];
    @service declare firestore: ServiceRegistry['firestore'];

    @tracked data: Song;
    unsub: Unsubscribe;

    constructor(owner: unknown, args: SongCardSignature['Args']) {
        super(owner, args);

        const { song } = this.args;

        // Cache data and subscribe to updates.
        this.data = song.data()!;
        this.unsub = onSnapshot(song.ref, (doc) => {
            this.data = doc.data()!;
        });
    }

    willDestroy(): void {
        super.willDestroy();
        this.unsub();
    }

    /**
     * Notes about the song.
     */
    get notes(): Note[] {
        const { data } = this,
            results: Note[] = [],
            fnAddNote = (text: string, icon = '') =>
                results.push({
                    icon,
                    text
                });

        if (this.args.user === User.Me) {
            const { pad } = data;
            if (pad > DrumPad.None) {
                fnAddNote(drumPadMap.get(pad)!, 'starFilled');
            }

            const { notes } = data;
            if (notes) {
                fnAddNote(notes);
            }
        }

        fnAddNote(startsWithMap.get(data.startsWith)!);

        return results;
    }

    /**
     * Calculated tablature source website (based on user and whether performance or practice).
     */
    get tabSource(): TabSource {
        const { tabSource, user } = this.args;
        if (tabSource) {
            return tabSource;
        }

        if (user === User.Vocals) {
            return TabSource.LyricsGenius;
        }

        if (user !== User.Me) {
            return TabSource.UltimateGuitar;
        }

        return this.router.currentRouteName === 'songs.practice.index'
            ? (tabSource ?? TabSource.Songsterr)
            : TabSource.GrooveScribe;
    }

    /**
     * External link to tablature.
     */
    get tabLink(): VoidFunction | undefined {
        const { tabSource } = this,
            { artist, title, groove } = this.data,
            q = encodeURI(`${artist} ${title}`),
            getOpenFn = (url: string) => {
                return () => window.open(url);
            };

        if (!this.args.user) {
            const { ytMusic } = this.data;
            if (ytMusic) {
                return getOpenFn(`https://www.youtube.com/watch?v=${ytMusic}`);
            }

            return getOpenFn(`https://www.youtube.com/results?search_query=${q}`);
        }

        if (tabSource === TabSource.LyricsGenius) {
            return getOpenFn(`https://genius.com/search?q=${q}`);
            // return `https://songmeanings.com/query/?query=${q}&type=songtitles`;
            // return `https://search.azlyrics.com/search.php?q=${q}`;
        }

        if (tabSource === TabSource.UltimateGuitar) {
            return getOpenFn(`https://www.ultimate-guitar.com/search.php?search_type=title&value=${q}`);
        }

        if (tabSource === TabSource.Drumeo) {
            return getOpenFn(`https://www.musora.com/drumeo/songs?title=${encodeURI(title)}&sort=-popularity`);
        }

        if (tabSource === TabSource.Songsterr) {
            return getOpenFn(`https://www.songsterr.com/?pattern=${q}&inst=drum`);
        }

        if (tabSource === TabSource.YouTubeMusic) {
            return getOpenFn(`https://music.youtube.com/search?q=${q}`);
        }

        if (tabSource === TabSource.GrooveScribe) {
            return getOpenFn(groove);
        }

        if (tabSource === TabSource.Rehearse) {
            return () => {
                this.args.cacheScroll?.();
                this.router.transitionTo('songs.practice.rehearse', this.args.song.id);
            };
        }

        return undefined;
    }

    /**
     * Action buttons (based on user and environment).
     */
    get buttons(): ButtonConfig[] {
        const buttons: ButtonConfig[] = [],
            fnAddButton = (
                text: ButtonConfig['text'],
                icon: ButtonConfig['iconType'],
                click: ButtonConfig['click'],
                isActive = false
            ) =>
                buttons.push({
                    text,
                    iconType: icon ?? 'globe',
                    click,
                    color: isActive ? 'warning' : 'text'
                });

        const { tabLink } = this;
        if (tabLink) {
            fnAddButton('Tablature', 'globe', tabLink);
        }

        if (this.firestore.userCanEdit) {
            fnAddButton('Needs Practice', 'flag', () => this.needsPractice(), !!this.data.practice);
            fnAddButton('Edit Song', 'documentEdit', () => this.edit());
        }

        return buttons;
    }

    /**
     * Indicates there is only one button, so should be tied to card click.
     */
    get useCardClick(): boolean {
        return this.buttons.length === 1;
    }

    /**
     * Indicates whether to show the row of buttons.
     */
    get showButtons(): boolean {
        return this.buttons.length > 1;
    }

    /**
     * Executes the first button click when the card is clicked (when there is only one button).
     */
    @action clickFirstButton(): void {
        const [btn] = this.buttons;
        if (btn) {
            btn.click();
        }
    }

    /**
     * Transitions to the edit route for the current song.
     */
    @action edit(): void {
        this.args.cacheScroll?.();
        this.router.transitionTo('songs.edit', this.args.song.id);
    }

    /**
     * Toggles the needs practice song data.
     */
    @action needsPractice(): void {
        updateDoc(this.args.song.ref, {
            practice: !this.data.practice
        });
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        Song: typeof SongCard;
    }
}
