import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import { type DocumentSnapshot } from 'firebase/firestore';
import { GigDateFormatter } from 'band-songs/components/gig-card';
import { ActionMode } from 'band-songs/utils/songs';

import type Route from 'band-songs/routes/gig';
import type { ModelFrom } from 'band-songs/utils/general';
import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/utils/songs';

export default class GigsController extends Controller {
    @service declare firestore: ServiceRegistry['firestore'];
    @service declare toast: ServiceRegistry['toast'];
    @service declare router: ServiceRegistry['router'];

    declare model: Awaited<ModelFrom<Route>>;

    @tracked mode = ActionMode.Perform;

    get disableEdit(): boolean {
        const d = this.model.gig?.data()?.date.toDate();
        return !!(d && d.getTime() < Date.now());
    }

    get isJustOneSet(): boolean {
        return this.model.two.length === 0;
    }

    get firstSetOfSongs(): DocumentSnapshot<Song>[] {
        const { one } = this.model;
        if (this.isJustOneSet) {
            const mid = Math.floor(one.length / 2);
            return one.slice(0, mid);
        }

        return one;
    }

    get secondSetOfSongs(): DocumentSnapshot<Song>[] {
        const { one, two } = this.model;
        if (this.isJustOneSet) {
            const mid = Math.ceil(one.length / 2);
            return one.slice(mid + 1);
        }

        return two;
    }

    get allSongs(): DocumentSnapshot<Song>[] {
        return [...this.firstSetOfSongs, ...this.secondSetOfSongs];
    }

    get title(): string {
        const data = this.model.gig?.data();
        if (!data) {
            return 'Data failed to load';
        }

        return `${data.venue} - ${GigDateFormatter.format(data.date.toDate())}`;
    }
}
