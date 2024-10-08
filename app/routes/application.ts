import Route from '@ember/routing/route';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { getDocs, collection, type QueryDocumentSnapshot } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils/general';

import type { ModelFrom } from 'band-songs/utils/general';

export type Band = {
    description: string;
};

export type AppModel = ModelFrom<ApplicationRoute>;

export default class ApplicationRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    queryParams = {
        b: {
            refreshModel: true
        },
        u: {
            refreshModel: false
        }
    };

    async model({ b }: { b: string }): Promise<{
        bands: QueryDocumentSnapshot<Band>[];
        band: QueryDocumentSnapshot<Band>;
    }> {
        const { firestore } = this,
            bands = (await getDocs(collection(firestore.db, 'bands'))).docs as QueryDocumentSnapshot<Band>[],
            band = bands.find((band) => band.id === b);

        if (!band) {
            throw `Band not found "${b}"`;
        }

        return {
            bands: sortBy(bands, 'description'),
            band
        };
    }
}
