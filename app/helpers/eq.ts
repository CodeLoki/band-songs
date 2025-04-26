import Helper from '@ember/component/helper';

export interface EqSignature {
    Args: {
        Positional: [unknown, unknown];
    };
    Return: boolean;
}

export default class Eq extends Helper<EqSignature> {
    compute([v1, v2]: EqSignature['Args']['Positional']): EqSignature['Return'] {
        return v1 === v2;
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        eq: typeof Eq;
    }
}
