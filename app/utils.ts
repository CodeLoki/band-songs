import AllSongs, { DrumPad } from 'band-songs/songs';
import { collection, addDoc } from 'firebase/firestore';
import { classify } from '@ember/string';
import type { DocumentSnapshot, DocumentData } from 'firebase/firestore';
import type Route from '@ember/routing/route';
import type { Registry as ServiceRegistry } from '@ember/service';

export function logError<T extends string>(msg: T, ...args: unknown[]): T {
    console.error(msg, ...args);
    return msg;
}

export function sortBy<T extends DocumentSnapshot>(models: T[], key: keyof DocumentData): T[] {
    return models.sort((a: T, b: T) => {
        const aData = a.data(),
            bData = b.data();

        if (!aData || !bData) {
            throw logError('[sortBy] Model data not present', models, key);
        }

        return aData[key] > bData[key] ? 1 : -1;
    });
}

export async function createDb(db: ServiceRegistry['firestore']['db']): Promise<void> {
    const enumValues: [string, string][] = [];
    try {
        for (const [, song] of AllSongs) {
            const docRef = await addDoc(collection(db, 'songs'), {
                active: true,
                artist: song.artist,
                title: song.title,
                length: song.length,
                startsWith: song.startsWith,
                groove: song.groove ?? '',
                drummeo: '',
                notes: song.notes ?? '',
                pad: song.pad ?? DrumPad.None
            });

            enumValues.push([classify(song.title).replace(/[^\w\s]/g, ''), docRef.id]);
        }
    } catch (e) {
        console.error('Error adding document: ', e);
    } finally {
        console.log(
            enumValues
                .sort(([a], [b]) => {
                    if (a < b) {
                        return -1;
                    }

                    if (b < a) {
                        return 1;
                    }

                    return 0;
                })
                .map(([title, id]) => `${title} = '${id}'`)
                .join(',')
        );
    }
}

/**
  Get the resolved type of an item.

  - If the item is a promise, the result will be the resolved value type
  - If the item is not a promise, the result will just be the type of the item
 */
export type Resolved<P> = P extends Promise<infer T> ? T : P;

/** Get the resolved model value from a route. */
export type ModelFrom<R extends Route> = Resolved<ReturnType<R['model']>>;
