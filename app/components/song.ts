import Component from '@glimmer/component';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { startsWithMap, DrumPad, drumPadMap } from 'band-songs/utils/songs';
import { action } from '@ember/object';
import { updateDoc, onSnapshot, type DocumentSnapshot, type Unsubscribe } from 'firebase/firestore';
import { User } from 'band-songs/controllers/application';
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
        songEditing?: VoidFunction;
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

    get buttons(): ButtonConfig[] {
        const { user } = this.args;
        if (!user) {
            return [];
        }

        const fnGetButton = (
            text: ButtonConfig['text'],
            icon: ButtonConfig['iconType'],
            click: ButtonConfig['click'],
            isActive = false
        ): ButtonConfig => ({
            text,
            iconType: icon ?? 'packetbeatApp',
            click,
            color: isActive ? 'warning' : 'text'
        });

        if (user !== User.Me) {
            const link = user === User.Jeff ? this.lyricsLink : this.ugLink;
            return link ? [fnGetButton('Link', 'packetbeatApp', () => this.openExternalLink(link))] : [];
        }

        const buttons: ButtonConfig[] = [],
            { groove, drumeo } = this.data;

        if (groove) {
            buttons.push(fnGetButton('GrooveScribe Tab', 'packetbeatApp', () => this.openExternalLink(groove)));
        }

        if (drumeo) {
            buttons.push(
                fnGetButton(
                    'Generic Tab',
                    'metricbeatApp',
                    () => this.openExternalLink(drumeo),
                    drumeo.includes('musora') || drumeo.includes('drumeo')
                )
            );
        }

        if (this.firestore.userCanEdit) {
            buttons.push(fnGetButton('Needs Practice', 'flag', () => this.needsPractice(), !!this.data.practice));
            buttons.push(fnGetButton('Edit Song', 'documentEdit', () => this.edit()));
        }

        return buttons;
    }

    private getSearchParam(): string {
        const { artist, title } = this.data;
        if (artist === 'Group W Bench' || artist === 'Convertible Jerk') {
            return '';
        }

        return encodeURI(`${artist} ${title}`);
    }

    get lyricsLink(): string {
        const q = this.getSearchParam();
        return q ? `https://genius.com/search?q=${q}` : '';
        // return `https://songmeanings.com/query/?query=${q}&type=songtitles`;
        // return `https://search.azlyrics.com/search.php?q=${q}`;
    }

    get ugLink(): string {
        const q = this.getSearchParam();
        return q ? `https://www.ultimate-guitar.com/search.php?search_type=title&value=${q}` : '';
    }

    /**
     * Indicates there is only one buttons, so should be tied to card click.
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
     * Executes the first button click when the card is clicked (only if there is one button).
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
        this.args.songEditing?.();
        this.router.transitionTo('songs.edit', this.args.song.id);
    }

    /**
     * Opens an external link.
     */
    @action openExternalLink(uri: string): void {
        window.open(uri);
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
