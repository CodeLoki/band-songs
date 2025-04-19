import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils/general';

import type { Registry as ServiceRegistry } from '@ember/service';
import type ApplicationRoute from 'band-songs/routes/application';
import type { ModelFrom } from 'band-songs/utils/general';
import type { Song, User } from 'band-songs/utils/songs';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

export default class SongsIndexRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model(): Promise<{ user: User; songs: QueryDocumentSnapshot<Song>[] }> {
        const appModel = (await this.modelFor('application')) as ModelFrom<ApplicationRoute>,
            songs = await getDocs(
                query(collection(this.firestore.db, 'songs'), where('bands', 'array-contains', appModel.band.ref))
            );

        return {
            user: this.paramsFor('application')['u'] as User,
            songs: sortBy(songs.docs as QueryDocumentSnapshot<Song>[], 'title')
        };
    }
}
