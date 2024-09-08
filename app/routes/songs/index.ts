import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { getDocs, collection, QuerySnapshot } from 'firebase/firestore';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/db/songs';

export default class SongsIndexRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    model(): QuerySnapshot<Song> {
        return getDocs(collection(this.firestore.db, 'songs')) as unknown as QuerySnapshot<Song>;
    }
}
