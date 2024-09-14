import { Timestamp } from 'firebase/firestore';

import type { DocumentSnapshot, DocumentData } from 'firebase/firestore';
import type Route from '@ember/routing/route';

export function logError<T extends string>(msg: T, ...args: unknown[]): T {
    console.error(msg, ...args);
    return msg;
}

export function sortBy<T extends DocumentSnapshot>(models: T[], key: keyof DocumentData): T[] {
    return models.sort((a: T, b: T) => {
        const aData = a.data(),
            bData = b.data();

        if (!aData || !bData) {
            throw logError('[sortBy] Model data not present', models, key, aData, bData);
        }

        // Are we sorting on a Date?
        if (aData[key] instanceof Timestamp) {
            // Get data for comparison and sort newest to oldest.
            return aData[key].toDate() < bData[key].toDate() ? 1 : -1;
        }

        return aData[key] > bData[key] ? 1 : -1;
    });
}

/**
  Get the resolved type of an item.

  - If the item is a promise, the result will be the resolved value type
  - If the item is not a promise, the result will just be the type of the item
 */
export type Resolved<P> = P extends Promise<infer T> ? T : P;

/** Get the resolved model value from a route. */
export type ModelFrom<R extends Route> = Resolved<ReturnType<R['model']>>;
