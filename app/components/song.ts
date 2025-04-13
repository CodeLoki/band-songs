import Component from '@glimmer/component';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { startsWithMap, DrumPad, drumPadMap, User, ActionMode } from 'band-songs/utils/songs';
import { action } from '@ember/object';
import { updateDoc, onSnapshot, type DocumentSnapshot, type Unsubscribe } from 'firebase/firestore';

import type { Song } from 'band-songs/utils/songs';
import type { EuiCardSignature } from '@ember-eui/core/components/eui-card';
import type Owner from '@ember/owner';

export interface SongCardSignature {
    Element: EuiCardSignature['Element'];
    Args: {
        user: User;
        song: DocumentSnapshot<Song>;
        mode?: ActionMode;
        cacheScroll?: VoidFunction;
    };
}

enum TabSource {
    Songsterr,
    UltimateGuitar,
    LyricsGenius,
    GrooveScribe,
    YouTubeMusic
}

/**
 * Calculated tablature source website (based on user and whether performance or practice).
 */
function getTabSource(user: User, mode?: ActionMode): TabSource {
    if (user === User.Me) {
        return mode === ActionMode.Practice ? TabSource.Songsterr : TabSource.GrooveScribe;
    }

    if (user === User.Vocals) {
        return TabSource.LyricsGenius;
    }

    if (user === User.Guitars) {
        return TabSource.UltimateGuitar;
    }

    return TabSource.YouTubeMusic;
}

/**
 * Returns the URL for the passed tab source.
 */
function getTabLink(song: Song, tabSource: TabSource): string | undefined {
    const q = encodeURI(`${song.artist} ${song.title}`);

    if (tabSource === TabSource.YouTubeMusic) {
        const { ytMusic } = song;
        if (ytMusic) {
            return `https://www.youtube.com/watch?v=${ytMusic}`;
        }

        return `https://www.youtube.com/results?search_query=${q}`;
    }

    if (tabSource === TabSource.LyricsGenius) {
        return `https://genius.com/search?q=${q}`;
        // return `https://songmeanings.com/query/?query=${q}&type=songtitles`;
        // return `https://search.azlyrics.com/search.php?q=${q}`;
    }

    if (tabSource === TabSource.UltimateGuitar) {
        return `https://www.ultimate-guitar.com/search.php?search_type=title&value=${q}`;
    }

    if (tabSource === TabSource.Songsterr) {
        return `https://www.songsterr.com/?pattern=${q}&inst=drum`;
    }

    if (tabSource === TabSource.GrooveScribe) {
        return song.groove;
    }

    return undefined;
}

type Note = {
    icon: string;
    text: string;
};

export default class SongCard extends Component<SongCardSignature> {
    @service declare router: ServiceRegistry['router'];
    @service declare firestore: ServiceRegistry['firestore'];

    @tracked data: Song;
    unsub: Unsubscribe;

    constructor(owner: Owner, args: SongCardSignature['Args']) {
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
            fnAddNote = (text: string, icon = ''): number =>
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
     * Executes the first button click when the card is clicked (when there is only one button).
     */
    @action async clickButton(): Promise<void> {
        const { args } = this,
            { mode } = args;

        if (this.firestore.userCanEdit && mode === ActionMode.Flag) {
            await this.togglePractice();
            return;
        }

        if (mode === ActionMode.Rehearse) {
            args.cacheScroll?.();
            this.router.transitionTo('songs.rehearse', args.song.id);
            return;
        }

        if (mode === ActionMode.Edit) {
            args.cacheScroll?.();
            this.router.transitionTo('songs.edit', args.song.id);
            return;
        }

        const link = getTabLink(this.data, getTabSource(args.user, mode));
        if (link) {
            window.open(link);
        }
    }

    /**
     * Toggles the needs practice song data.
     */
    @action async togglePractice(): Promise<void> {
        await updateDoc(this.args.song.ref, {
            practice: !this.data.practice
        });
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        Song: typeof SongCard;
    }
}
