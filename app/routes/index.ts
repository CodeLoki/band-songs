import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getDocs, collection, query, where } from 'firebase/firestore';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import type { Gig } from 'band-songs/db/gigs';
import type { AppModel } from 'band-songs/routes/application';

export default class IndexRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model(): Promise<QueryDocumentSnapshot<Gig>[]> {
        const appModel = (await this.modelFor('application')) as AppModel,
            gigs = await getDocs(query(collection(this.firestore.db, 'gigs'), where('band', '==', appModel.band.ref)));

        return gigs.docs.sort((d1, d2) =>
            d1.data()['date'].toDate() < d2.data()['date'].toDate() ? 1 : -1
        ) as QueryDocumentSnapshot<Gig>[];
    }
}
