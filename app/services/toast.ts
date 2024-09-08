import Service, { service } from '@ember/service';

import type EuiToasterService from '@ember-eui/core/services/eui-toaster';

export default class ToastService extends Service {
    @service declare euiToaster: EuiToasterService;

    showToast(text: string): void {
        this.euiToaster.show({
            title: text
        });
    }

    showError(action: string, ex: unknown): void {
        this.euiToaster.show({
            title: `Error ${action}`,
            useMarkdownFormat: true,
            body: `> ${String(ex)}`
        });
    }
}

// Don't remove this declaration: this is what enables TypeScript to resolve
// this service using `Owner.lookup('service:firestore')`, as well
// as to check when you pass the service name as an argument to the decorator,
// like `@service('firestore') declare altName: FirestoreService;`.
declare module '@ember/service' {
    interface Registry {
        toast: ToastService;
    }
}
