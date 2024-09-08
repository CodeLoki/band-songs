import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { doc, getDoc, getDocs, collection } from 'firebase/firestore';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { Gig } from 'band-songs/db/gigs';
import type { Song } from 'band-songs/db/songs';
import type Controller from 'band-songs/controllers/gigs';
import type Transition from '@ember/routing/transition';
import type { DocumentSnapshot, QueryDocumentSnapshot } from 'firebase/firestore';

type Model = {
    gig?: DocumentSnapshot<Gig>;
    one: DocumentSnapshot<Song>[];
    two: DocumentSnapshot<Song>[];
    pocket: DocumentSnapshot<Song>[];
    all: QueryDocumentSnapshot<Song>[];
    venues: QueryDocumentSnapshot<{ description: string }>[];
};

export default class GigsRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model({ gig_id }: { gig_id: string }): Promise<Model> {
        const all = (await getDocs(collection(this.firestore.db, 'songs'))).docs.sort((d1, d2) => {
                const { title: t1 } = d1.data(),
                    { title: t2 } = d2.data();

                return t1 > t2 ? 1 : -1;
            }) as QueryDocumentSnapshot<Song>[],
            venues = (await getDocs(collection(this.firestore.db, 'venues'))).docs as QueryDocumentSnapshot<{
                description: string;
            }>[];

        if (gig_id === 'new') {
            return {
                one: [],
                two: [],
                pocket: [],
                all,
                venues
            };
        }

        const gig = (await getDoc(doc(this.firestore.db, 'gigs', gig_id))) as DocumentSnapshot<Gig>,
            data = gig.data() as Gig,
            one = await Promise.all(data.one.map((d) => getDoc(d))),
            two = await Promise.all(data.two.map((d) => getDoc(d))),
            pocket = await Promise.all(data.pocket.map((d) => getDoc(d)));

        return {
            gig,
            one,
            two,
            pocket,
            all,
            venues
        };
    }

    setupController(controller: Controller, model: Model, transition: Transition) {
        super.setupController(controller, model, transition);
        controller.resetFields(model);
    }
}
