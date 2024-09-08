import templateOnlyComponent from '@ember/component/template-only';

export interface DeleteModalSignature {
    Element: HTMLDivElement;
    Args: {
        title: string;
        toggleDeleteModal: VoidFunction;
        delete: () => Promise<void>;
    };
}

const DeleteModal = templateOnlyComponent<DeleteModalSignature>();
export default DeleteModal;

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        DeleteModal: typeof DeleteModal;
    }
}
