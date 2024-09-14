import Helper from '@ember/component/helper';
import { service, type Registry as ServiceRegistry } from '@ember/service';

export interface CanUserEditSignature {
    Return: boolean;
}

export default class CanUserEdit extends Helper<CanUserEditSignature> {
    @service declare firestore: ServiceRegistry['firestore'];

    compute(): CanUserEditSignature['Return'] {
        return this.firestore.userCanEdit;
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'can-user-edit': typeof CanUserEdit;
    }
}
