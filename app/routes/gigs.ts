import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { doc, getDoc, getDocs, collection, query, where } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { Gig } from 'band-songs/db/gigs';
import type { Song } from 'band-songs/db/songs';
import type Controller from 'band-songs/controllers/gigs';
import type Transition from '@ember/routing/transition';
import type { DocumentSnapshot, QueryDocumentSnapshot } from 'firebase/firestore';
import type { AppModel } from 'band-songs/routes/application';
import type { User } from 'band-songs/controllers/application';

type RouteModel = AppModel & {
    user: User;
    gig?: DocumentSnapshot<Gig>;
    one: DocumentSnapshot<Song>[];
    two: DocumentSnapshot<Song>[];
    pocket: DocumentSnapshot<Song>[];
    all: QueryDocumentSnapshot<Song>[];
};

export default class GigsRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model({ gig_id }: { gig_id: string }): Promise<RouteModel> {
        const appModel = this.modelFor('application') as AppModel,
            user = this.paramsFor('application')['u'] as User,
            all = sortBy(
                (
                    await getDocs(
                        query(
                            collection(this.firestore.db, 'songs'),
                            where('bands', 'array-contains', appModel.band.ref)
                        )
                    )
                ).docs as QueryDocumentSnapshot<Song>[],
                'title'
            );

        if (gig_id === 'new') {
            return {
                ...appModel,
                user,
                one: [],
                two: [],
                pocket: [],
                all
            };
        }

        const gig = (await getDoc(doc(this.firestore.db, 'gigs', gig_id))) as DocumentSnapshot<Gig>,
            data = gig.data() as Gig,
            one = await Promise.all(data.one.map((d) => getDoc(d))),
            two = await Promise.all(data.two.map((d) => getDoc(d))),
            pocket = await Promise.all(data.pocket.map((d) => getDoc(d)));

        return {
            ...appModel,
            user,
            gig,
            one,
            two,
            pocket,
            all
        };
    }

    setupController(controller: Controller, model: RouteModel, transition: Transition) {
        super.setupController(controller, model, transition);
        controller.resetFields(model);
    }
}
