import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { collection, getDocs, query } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils/general';
import { songConverter } from 'band-songs/utils/songs';

import type { Registry as ServiceRegistry } from '@ember/service';
import type ApplicationRoute from 'band-songs/routes/application';
import type { ModelFrom } from 'band-songs/utils/general';
import type { Song, User } from 'band-songs/utils/songs';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

export default class SongsOthersRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model(): Promise<{ user: User; songs: QueryDocumentSnapshot<Song>[] }> {
        const appModel = (await this.modelFor('application')) as ModelFrom<ApplicationRoute>,
            songs = (await getDocs(query(collection(this.firestore.db, 'songs').withConverter(songConverter)))).docs;

        return {
            user: this.paramsFor('application')['u'] as User,
            songs: sortBy(
                songs.filter((s) => {
                    const bands = s.data().bands;
                    return bands.length > 0 && !bands.find((b) => b.id === appModel.band.ref.id);
                }),
                'title'
            )
        };
    }
}
