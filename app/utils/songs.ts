import type { DocumentSnapshot, QueryDocumentSnapshot } from 'firebase/firestore';
import type { Band } from 'band-songs/routes/application';

export type Song = {
    /** Song artist. */
    artist: string;
    /** Song title. */
    title: string;
    /** Song length. */
    length: number;
    /** The musician that starts the song. */
    startsWith: StartsWith;
    /** The groovescribe drum tab. */
    groove: string;
    /** Any non-groovescribe drum tab. */
    drumeo: string;
    /** Embedded youtube url. */
    ytMusic: string;
    /** Drummer notes for this song. */
    notes: string;
    /** Auxiliary drum pad used in this song. */
    pad: DrumPad;
    /** Indicates this song needs practice */
    practice?: boolean;
    /** The collection of bands that play this song. */
    bands: QueryDocumentSnapshot<Band>[];
};

export enum DrumPad {
    None = -1,
    Cowbell,
    Claps,
    Tambourine,
    BellTree,
    China,
    Edrum
}

export const drumPadMap = new Map<DrumPad, string>([
    [DrumPad.None, 'None'],
    [DrumPad.Cowbell, 'Cowbell (#641)'],
    [DrumPad.Claps, 'Claps (#800)'],
    [DrumPad.Tambourine, 'Tambourine (#724)'],
    [DrumPad.BellTree, 'Tree chime (#631)'],
    [DrumPad.China, 'China Crash'],
    [DrumPad.Edrum, 'EDrum']
]);

export enum StartsWith {
    All,
    RhythmGuitar,
    Drums,
    DrumsAndKeys,
    LeadGuitar,
    LeadAndVocals,
    DrumsAndBass,
    DrumsAndGuitar,
    Bass,
    Guitars,
    Vocals,
    Keys,
    Trumpet
}

export const startsWithMap = new Map<StartsWith, string>([
    [StartsWith.All, 'Drums count in'],
    [StartsWith.RhythmGuitar, 'Rhythm guitar'],
    [StartsWith.Drums, 'Drums'],
    [StartsWith.DrumsAndKeys, 'Drums and keys'],
    [StartsWith.LeadGuitar, 'Lead guitar'],
    [StartsWith.LeadAndVocals, 'Lead guitar and vocals'],
    [StartsWith.DrumsAndBass, 'Drums and bass'],
    [StartsWith.DrumsAndGuitar, 'Drums and guitar'],
    [StartsWith.Bass, 'Bass'],
    [StartsWith.Guitars, 'Guitars'],
    [StartsWith.Vocals, 'Vocals'],
    [StartsWith.Keys, 'Keys'],
    [StartsWith.Trumpet, 'Trumpet']
]);

export enum PerformanceMode {
    perform,
    rehearse,
    practice,
    edit
}

export enum TabSource {
    Songsterr,
    UltimateGuitar,
    LyricsGenius,
    GrooveScribe,
    YouTubeMusic
}

export enum User {
    None = '',
    Me = 'z',
    Vocals = 'vocals',
    Guitars = 'guitars'
}

/**
 * Calculated tablature source website (based on user and whether performance or practice).
 */
export function getTabSource(user: User, mode?: PerformanceMode): TabSource {
    if (user === User.Me) {
        return mode === PerformanceMode.practice ? TabSource.Songsterr : TabSource.GrooveScribe;
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
export function getTabLink(song: Song, tabSource: TabSource): string | undefined {
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

export function calculateSetListLength(songs: DocumentSnapshot<Song>[]): string {
    return `${Math.round(
        songs.reduce<number>((sum, song) => {
            const { length = 0 } = song.data() ?? {};
            return sum + length;
        }, 0) / 60
    )} minutes`;
}
