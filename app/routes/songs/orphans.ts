import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getDocs, collection, query, type QueryDocumentSnapshot } from 'firebase/firestore';
import { sortBy } from 'band-songs/utils/general';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/utils/songs';
import type { User } from 'band-songs/controllers/application';

export default class SongsOrphansRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model(): Promise<{ user: User; songs: QueryDocumentSnapshot<Song>[] }> {
        const songs = (
            (await getDocs(query(collection(this.firestore.db, 'songs')))).docs as QueryDocumentSnapshot<Song>[]
        ).filter((s) => s.data().bands.length === 0);

        return {
            user: this.paramsFor('application')['u'] as User,
            songs: sortBy(songs, 'title')
        };
    }
}
