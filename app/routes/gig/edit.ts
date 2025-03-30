import Route from '@ember/routing/route';

import type Controller from 'band-songs/controllers/gig/edit';
import type Transition from '@ember/routing/transition';
import type { ModelFrom } from 'band-songs/utils/general';
import type ParentRoute from '../gig';

export default class EditGigRoute extends Route {
    setupController(controller: Controller, model: ModelFrom<ParentRoute>, transition: Transition): void {
        super.setupController(controller, model, transition);
        controller.resetFields(model);
    }
}
