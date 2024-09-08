import Helper from '@ember/component/helper';

export interface GetHeaderLinksSignature {
    Return: HTMLDivElement;
}

export default class GetHeaderLinks extends Helper<GetHeaderLinksSignature> {
    public compute(): GetHeaderLinksSignature['Return'] {
        return document.querySelector('#header-links') as HTMLDivElement;
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        'get-header-links': typeof GetHeaderLinks;
    }
}
