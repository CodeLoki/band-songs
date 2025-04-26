import Helper from '@ember/component/helper';

export interface NotSignature {
    Args: {
        Positional: [unknown];
    };
    Return: boolean;
}

export default class Not extends Helper<NotSignature> {
    compute([v]: NotSignature['Args']['Positional']): NotSignature['Return'] {
        return !v;
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        not: typeof Not;
    }
}
