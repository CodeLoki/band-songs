import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getDocs, collection } from 'firebase/firestore';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import type { Gig } from 'band-songs/db/gigs';

export default class IndexRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model(): Promise<QueryDocumentSnapshot<Gig>[]> {
        const gigs = await getDocs(collection(this.firestore.db, 'gigs'));
        return gigs.docs.sort((d1, d2) =>
            d1.data()['date'].toDate() < d2.data()['date'].toDate() ? 1 : -1
        ) as QueryDocumentSnapshot<Gig>[];
    }
}
