import AllSongs, { DrumPad } from 'band-songs/songs';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { classify } from '@ember/string';

import type { Song } from 'band-songs/songs';

import type FirestoreService from 'band-songs/services/firestore';

export async function createDb(db: FirestoreService['db']): Promise<void> {
    try {
        for (const [, song] of AllSongs) {
            const docRef = await addDoc(collection(db, 'songs'), {
                active: true,
                artist: song.artist,
                title: song.title,
                length: song.length,
                startsWith: song.startsWith,
                groove: song.groove ?? '',
                notes: song.notes ?? '',
                pad: song.pad ?? DrumPad.None
            });
            console.log('Document written with ID: ', docRef.id);
        }
    } catch (e) {
        console.error('Error adding document: ', e);
    }
}

export async function generateSongEnum(db: FirestoreService['db']): Promise<void> {
    const querySnapshot = await getDocs(collection(db, 'songs')),
        songs = querySnapshot.docs.map(
            (s) => `${classify((s.data() as unknown as Song).title).replace(/[^\w\s]/g, '')} = '${s.id}'`
        );

    console.log(songs.join(','));
}
