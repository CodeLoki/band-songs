import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getDocs, collection, query, where, type QueryDocumentSnapshot } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/db/songs';
import type { ModelFrom } from 'band-songs/utils';
import type ApplicationRoute from 'band-songs/routes/application';

type AppModel = ModelFrom<ApplicationRoute>;

export default class SongsIndexRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model(): Promise<QueryDocumentSnapshot<Song>[]> {
        const appModel = (await this.modelFor('application')) as AppModel,
            songs = await getDocs(
                query(collection(this.firestore.db, 'songs'), where('bands', 'array-contains', appModel.band.ref))
            );

        return sortBy(songs.docs as QueryDocumentSnapshot<Song>[], 'title');
    }
}
