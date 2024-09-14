import Controller from '@ember/controller';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import type ApplicationRoute from 'band-songs/routes/application';
import type { Band } from 'band-songs/routes/application';
import type { ModelFrom } from 'band-songs/utils';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import '@ember-eui/core/themes/dark.css';

export default class ApplicationController extends Controller {
    @service declare router: ServiceRegistry['router'];
    @service declare firestore: ServiceRegistry['firestore'];

    declare model: ModelFrom<ApplicationRoute>;

    queryParams = ['b'];
    @tracked b = 'qRphnEOTg8GeDc0dQa4K';

    @tracked bandSelectorOpen = false;

    @action authenticate(): void {
        this.firestore.login();
    }

    @action changeBand(band: QueryDocumentSnapshot<Band>) {
        const { id } = band;
        if (id === this.b) {
            return;
        }

        this.bandSelectorOpen = false;
        this.router.transitionTo({
            queryParams: {
                b: id
            }
        });
    }
}
