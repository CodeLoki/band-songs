import Helper from '@ember/component/helper';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { User } from 'band-songs/utils/songs';

export interface IsUserMeSignature {
    Args: {
        Positional: [User];
    };
    Return: boolean;
}

export default class IsUserMe extends Helper<IsUserMeSignature> {
    @service declare firestore: ServiceRegistry['firestore'];

    compute([user]: IsUserMeSignature['Args']['Positional']): IsUserMeSignature['Return'] {
        return user === User.Me;
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'is-user-me': typeof IsUserMe;
    }
}
