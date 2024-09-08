import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

import type { Song } from 'band-songs/db/songs';
import type Route from 'band-songs/routes/songs/index';
import type { ModelFrom } from 'band-songs/utils';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

export default class SongsIndexController extends Controller {
    declare model: ModelFrom<Route>;

    @tracked isEditMode = false;

    get songs(): QueryDocumentSnapshot<Song>[] {
        return this.model.docs.sort((a, b) => {
            const aData = a.data(),
                bData = b.data();

            return aData.title > bData.title ? 1 : -1;
        });
    }

    @action toggleEditMode(evt: Event): void {
        this.isEditMode = !!(evt.target as HTMLInputElement).checked;
    }
}
