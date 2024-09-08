import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { doc, DocumentSnapshot, getDoc } from 'firebase/firestore';

import type { Song } from 'band-songs/db/songs';
import type { Registry as ServiceRegistry } from '@ember/service';
import type Controller from 'band-songs/controllers/songs/edit';
import type Transition from '@ember/routing/transition';

type Model = Promise<DocumentSnapshot<Song> | undefined>;

export default class SongsEditRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model({ song_id }: { song_id: string }): Model {
        if (song_id === 'new') {
            return undefined;
        }

        return (await getDoc(doc(this.firestore.db, 'songs', song_id))) as DocumentSnapshot<Song>;
    }

    setupController(controller: Controller, model: Awaited<Model>, transition: Transition): void {
        super.setupController(controller, model, transition);
        controller.resetFields(model);
    }
}
