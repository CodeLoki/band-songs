import Component from '@glimmer/component';
import EuiFormControlLayout from '@ember-eui/core/components/eui-form-control-layout';
import EuiFormLabel from '@ember-eui/core/components/eui-form-label';
import { guidFor } from '@ember/object/internals';

import type { EuiFormControlLayoutSignature } from '@ember-eui/core/components/eui-form-control-layout';

export interface FormControlSignature {
    Element: EuiFormControlLayoutSignature['Element'];
    Args: {
        label: string;
    };
    Blocks: {
        default: [string];
    };
}

export default class FormControl extends Component<FormControlSignature> {
    get uniqId(): string {
        return guidFor(this);
    }

    <template>
        <EuiFormControlLayout @fullWidth={{true}} class="form-control" ...attributes>
            <:prepend as |classes|>
                <EuiFormLabel for={{this.uniqId}} class={{classes}}>
                    {{@label}}
                </EuiFormLabel>
            </:prepend>
            <:field>
                {{yield this.uniqId}}
            </:field>
        </EuiFormControlLayout>
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        FormControl: typeof FormControl;
    }
}
