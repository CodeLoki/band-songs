import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getDocs, collection, query, where, type QueryDocumentSnapshot } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils/general';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/utils/songs';
import type { ModelFrom } from 'band-songs/utils/general';
import type ApplicationRoute from 'band-songs/routes/application';
import type { User } from 'band-songs/controllers/application';
import type SongsRoute from '../songs';

export default class SongsPracticeRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model(): Promise<{ user: User; songs: QueryDocumentSnapshot<Song>[] }> {
        const appModel = (await this.modelFor('application')) as ModelFrom<ApplicationRoute>,
            songsModel = this.modelFor('songs') as ModelFrom<SongsRoute>,
            songs = await getDocs(
                query(
                    collection(this.firestore.db, 'songs'),
                    where('bands', 'array-contains', appModel.band.ref),
                    where('groove', '==', '')
                )
            );

        songsModel.updateTitle(`Incomplete Songs (${songs.docs.length})`);

        return {
            user: songsModel.user,
            songs: sortBy(songs.docs as QueryDocumentSnapshot<Song>[], 'title')
        };
    }
}
