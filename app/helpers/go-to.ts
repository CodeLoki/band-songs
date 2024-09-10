import Helper from '@ember/component/helper';
import { service, type Registry as ServiceRegistry } from '@ember/service';

import type RouterService from '@ember/routing/router-service';

export interface GoToSignature {
    Args: {
        Positional: Parameters<RouterService['transitionTo']>;
    };
    Return: VoidFunction;
}

export default class GoTo extends Helper<GoToSignature> {
    @service declare router: ServiceRegistry['router'];

    compute(args: GoToSignature['Args']['Positional']): GoToSignature['Return'] {
        return () => {
            this.router.transitionTo(...args);
        };
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'go-to': typeof GoTo;
    }
}
