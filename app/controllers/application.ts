import Controller from '@ember/controller';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type ApplicationRoute from 'band-songs/routes/application';
import type { Band } from 'band-songs/routes/application';
import type { ModelFrom } from 'band-songs/utils/general';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

import '@ember-eui/core/themes/dark.css';

export enum User {
    None = '',
    Me = 'z',
    Paul = 'pp',
    Jeff = 'jt',
    JayLee = 'jl',
    Eric = 'eg'
}

export default class ApplicationController extends Controller {
    @service declare router: ServiceRegistry['router'];
    @service declare firestore: ServiceRegistry['firestore'];

    declare model: ModelFrom<ApplicationRoute>;

    queryParams = ['b', 'u'];

    /**
     * The selected band (defaults to Convertible Jerk).
     */
    @tracked b = 'qRphnEOTg8GeDc0dQa4K';

    /**
     * The selected user.
     */
    @tracked u = User.None;

    @tracked bandSelectorOpen = false;

    @action changeBand(band: QueryDocumentSnapshot<Band>) {
        this.bandSelectorOpen = false;

        const { id } = band;
        if (id !== this.b) {
            this.router.transitionTo('index', {
                queryParams: {
                    b: id,
                    u: this.u
                }
            });
        }
    }
}
