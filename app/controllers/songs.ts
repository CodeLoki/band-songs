import Controller from '@ember/controller';

import type { Song } from 'band-songs/db/songs';
import type Route from 'band-songs/routes/songs';
import type { ModelFrom } from 'band-songs/utils';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

export default class SongsController extends Controller {
    declare model: ModelFrom<Route>;

    get songs(): QueryDocumentSnapshot<Song>[] {
        return this.model.docs.sort((a, b) => {
            const aData = a.data(),
                bData = b.data();

            return aData.title > bData.title ? -1 : 1;
        });
    }
}
