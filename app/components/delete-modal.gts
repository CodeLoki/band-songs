import EuiModal from '@ember-eui/core/components/eui-modal';
import EuiModalHeader from '@ember-eui/core/components/eui-modal-header';
import EuiModalBody from '@ember-eui/core/components/eui-modal-body';
import EuiModalFooter from '@ember-eui/core/components/eui-modal-footer';
import EuiTitle from '@ember-eui/core/components/eui-title';
import EuiText from '@ember-eui/core/components/eui-text';
import EuiButton from '@ember-eui/core/components/eui-button';
import { on } from '@ember/modifier';
import type { TOC } from '@ember/component/template-only';

export interface DeleteModalSignature {
    Element: HTMLDivElement;
    Args: {
        title: string;
        toggleDeleteModal: VoidFunction;
        delete: () => Promise<void>;
    };
}

const DeleteModal: TOC<DeleteModalSignature> = <template>
    <EuiModal ...attributes>
        <EuiModalHeader>
            <EuiTitle @size="m">
                Delete
            </EuiTitle>
        </EuiModalHeader>
        <EuiModalBody>
            <EuiText>
                <p>Are you sure you want to delete "{{@title}}"?</p>
            </EuiText>
        </EuiModalBody>
        <EuiModalFooter>
            <EuiButton {{on "click" @toggleDeleteModal}}>
                Cancel
            </EuiButton>
            <EuiButton @color="danger" @fill={{true}} {{on "click" @delete}}>
                Delete
            </EuiButton>
        </EuiModalFooter>
    </EuiModal>
</template>;

export default DeleteModal;

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        DeleteModal: typeof DeleteModal;
    }
}
