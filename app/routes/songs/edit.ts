import Route from '@ember/routing/route';
import { service } from '@ember/service';
import { doc, DocumentSnapshot, getDoc } from 'firebase/firestore';

import type { Song } from 'band-songs/utils/songs';
import type { Registry as ServiceRegistry } from '@ember/service';
import type Controller from 'band-songs/controllers/songs/edit';
import type Transition from '@ember/routing/transition';
import type { AppModel } from '../application';

type RouteModel = AppModel & { song?: DocumentSnapshot<Song> };

export default class SongsEditRoute extends Route {
    @service declare firestore: ServiceRegistry['firestore'];

    async model({ song_id }: { song_id: string }): Promise<RouteModel> {
        const appModel = (await this.modelFor('application')) as AppModel;
        return {
            ...appModel,
            song:
                song_id === 'new'
                    ? undefined
                    : ((await getDoc(doc(this.firestore.db, 'songs', song_id))) as DocumentSnapshot<Song>)
        };
    }

    setupController(controller: Controller, model: RouteModel, transition: Transition): void {
        super.setupController(controller, model, transition);
        controller.resetFields(model);
    }
}
