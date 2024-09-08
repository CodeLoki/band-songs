import Controller from '@ember/controller';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { action } from '@ember/object';

import '@ember-eui/core/themes/dark.css';

export default class ApplicationController extends Controller {
    @service declare router: ServiceRegistry['router'];
    @service declare firestore: ServiceRegistry['firestore'];

    @action authenticate(): void {
        const { firestore } = this;
        if (firestore.user) {
            firestore.logout();
        } else {
            firestore.login();
        }
    }
}
