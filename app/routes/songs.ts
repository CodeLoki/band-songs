import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { collection, getDocs } from 'firebase/firestore';

import type FirestoreService from 'band-songs/services/firestore';
import type { Song } from '../songs';

export default class SongsRoute extends Route {
    @service declare firestore: FirestoreService;

    async model(): Promise<Song[]> {
        const querySnapshot = await getDocs(collection(this.firestore.db, 'songs'));
        return querySnapshot.docs.map((d) => ({
            id: d.id,
            ...d.data()
        })) as unknown as (Song & { id: string })[];
    }
}
