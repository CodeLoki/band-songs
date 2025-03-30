import Route from '@ember/routing/route';
import { service } from '@ember/service';

import type { Registry as ServiceRegistry } from '@ember/service';

export default class ViewGigRoute extends Route {
    @service declare router: ServiceRegistry['router'];

    redirect(): void {
        if (this.paramsFor('gig')['gig_id'] === 'new') {
            this.router.transitionTo('gig.edit', 'new');
        }
    }
}
