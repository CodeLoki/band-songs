import type { DocumentSnapshot } from 'firebase/firestore';

export type Song = {
    artist: string;
    title: string;
    length: number;
    startsWith: StartsWith;
    groove?: string;
    notes?: string;
    pad: DrumPad;
};

export enum DrumPad {
    None = -1,
    Cowbell,
    Claps,
    Tambourine,
    BellTree,
    China
}

export const drumPadMap = new Map<DrumPad, string>([
    [DrumPad.None, 'None'],
    [DrumPad.Cowbell, 'Cowbell (#641)'],
    [DrumPad.Claps, 'Claps (#800)'],
    [DrumPad.Tambourine, 'Tambourine (#727)'],
    [DrumPad.BellTree, 'Tree chime (#631)'],
    [DrumPad.China, 'China Crash']
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
