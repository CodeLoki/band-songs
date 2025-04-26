import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils/general';
import { gigConverter } from 'band-songs/utils/gigs';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { AppModel } from 'band-songs/routes/application';
import type { Gig } from 'band-songs/utils/gigs';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

export default class IndexRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model(): Promise<QueryDocumentSnapshot<Gig>[]> {
        const appModel = (await this.modelFor('application')) as AppModel,
            gigs = await getDocs(
                query(collection(this.firestore.db, 'gigs'), where('band', '==', appModel.band.ref)).withConverter(
                    gigConverter
                )
            );

        return sortBy(gigs.docs, 'date');
    }
}
