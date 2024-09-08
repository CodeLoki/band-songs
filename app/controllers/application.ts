import Controller from '@ember/controller';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import '@ember-eui/core/themes/dark.css';

export default class ApplicationController extends Controller {
    @service declare router: ServiceRegistry['router'];
}
