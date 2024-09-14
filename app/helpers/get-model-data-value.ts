import Helper from '@ember/component/helper';

import type { DocumentSnapshot, DocumentData } from 'firebase/firestore';

export interface GetModelDataValueSignature<T extends DocumentSnapshot> {
    Args: {
        Positional: [T, keyof DocumentData];
    };
    Return: string;
}

export default class GetModelDataValue<T extends DocumentSnapshot> extends Helper<GetModelDataValueSignature<T>> {
    compute([
        model,
        key
    ]: GetModelDataValueSignature<T>['Args']['Positional']): GetModelDataValueSignature<T>['Return'] {
        const data = model.data();
        if (!data) {
            return `"${key}" not found`;
        }

        return String(data[key]);
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'get-model-data-value': typeof GetModelDataValue;
    }
}
