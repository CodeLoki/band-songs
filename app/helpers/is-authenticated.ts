import Helper from '@ember/component/helper';
import { service, type Registry as ServiceRegistry } from '@ember/service';

export interface IsAuthenticatedSignature {
    Return: boolean;
}

export default class IsAuthenticated extends Helper<IsAuthenticatedSignature> {
    @service declare firestore: ServiceRegistry['firestore'];

    compute(): IsAuthenticatedSignature['Return'] {
        return !!this.firestore.user;
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'is-authenticated': typeof IsAuthenticated;
    }
}
