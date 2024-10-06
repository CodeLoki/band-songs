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
    /** Drummer notes for this song. */
    notes: string;
    /** Auxiliary drum pad used in this song. */
    pad: DrumPad;
    /** Indicates this song needs practice */
    practice?: boolean;
    /** The collection of bands that play this song. */
    bands: QueryDocumentSnapshot<Band>[];
    /** Notes for Paul Plawin. */
    pp: string;
    /** Notes for Jay Lee */
    jl: string;
    /** Notes for Eric Glick. */
    eg: string;
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
    [DrumPad.Tambourine, 'Tambourine (#727)'],
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

export function calculateSetListLength(songs: DocumentSnapshot<Song>[]): string {
    return `${Math.round(
        songs.reduce<number>((sum, song) => {
            const { length = 0 } = song.data() ?? {};
            return sum + length;
        }, 0) / 60
    )} minutes`;
}
