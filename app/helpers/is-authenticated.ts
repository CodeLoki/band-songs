import Helper from '@ember/component/helper';
import { service, type Registry as ServiceRegistry } from '@ember/service';
// import { observer } from '@ember/object';

export interface IsAuthenticatedSignature {
    Return: boolean;
}

export default class IsAuthenticated extends Helper<IsAuthenticatedSignature> {
    @service declare firestore: ServiceRegistry['firestore'];

    compute(): IsAuthenticatedSignature['Return'] {
        return false;
        // return !!this.firestore.user;
    }

    // onNewUser = observer('firestore.user', () => {
    //     console.log('changed');
    //     this.recompute();
    // });
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'is-authenticated': typeof IsAuthenticated;
    }
}
