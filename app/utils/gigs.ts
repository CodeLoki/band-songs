import type { DocumentReference, Timestamp } from 'firebase/firestore';
import type { Song } from './songs';

export type Gig = {
    date: Timestamp;
    venue: string;
    one: DocumentReference<Song>[];
    two: DocumentReference<Song>[];
    pocket: DocumentReference<Song>[];
};
