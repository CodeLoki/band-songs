import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { collection, getDocs } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils/general';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { ModelFrom } from 'band-songs/utils/general';
import type { FirestoreDataConverter, QueryDocumentSnapshot } from 'firebase/firestore';

const bandConverter: FirestoreDataConverter<Band> = {
    toFirestore: (band: Band) => band,
    fromFirestore: (snapshot: QueryDocumentSnapshot, options) => {
        const data = snapshot.data(options) as Band;
        return {
            id: snapshot.id,
            ...data
        };
    }
};

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
            bands = (await getDocs(collection(firestore.db, 'bands').withConverter(bandConverter))).docs,
            band = bands.find((band) => band.id === b);

        if (!band) {
            throw new Error(`Band not found "${b}"`);
        }

        return {
            bands: sortBy(bands, 'description'),
            band
        };
    }
}
