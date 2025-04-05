import Component from '@glimmer/component';
import { on } from '@ember/modifier';
import { tracked } from '@glimmer/tracking';
import { fn } from '@ember/helper';
import { action } from '@ember/object';
import EuiFlexItem from '@ember-eui/core/components/eui-flex-item';
import EuiPopover from '@ember-eui/core/components/eui-popover';
import EuiButtonEmpty from '@ember-eui/core/components/eui-button-empty';
import EuiFlexGroup from '@ember-eui/core/components/eui-flex-group';

import type { EuiButtonSignature } from '@ember-eui/core/components/eui-button';

export type OptionInfo<T> = {
    value: T;
    text: string;
    icon?: EuiButtonSignature['Args']['iconType'];
};

export interface ComboBoxSignature<T> {
    Args: {
        options: OptionInfo<T>[];
        selectedOption: OptionInfo<T>;
        changeSelection: (v: T) => void;
    };
}

export default class ComboBox<T> extends Component<ComboBoxSignature<T>> {
    @tracked isOpen = false;

    @action selectOption(option: OptionInfo<T>): void {
        this.args.changeSelection(option.value);
        this.isOpen = false;
    }

    <template>
        <EuiPopover @isOpen={{this.isOpen}} @closePopover={{fn (mut this.isOpen) false}}>
            <:button>
                <EuiButtonEmpty
                    @iconType={{@selectedOption.icon}}
                    @iconSide="right"
                    @color="text"
                    @size="m"
                    {{on "click" (fn (mut this.isOpen) true)}}
                >
                    {{@selectedOption.text}}
                </EuiButtonEmpty>
            </:button>
            <:content>
                <EuiFlexGroup @direction="column" @gutterSize="xs">
                    {{#each @options as |opt|}}
                        <EuiFlexItem @grow={{false}}>
                            <EuiButtonEmpty
                                @iconType={{opt.icon}}
                                @iconSide="right"
                                {{on "click" (fn this.selectOption opt)}}
                            >
                                {{opt.text}}
                            </EuiButtonEmpty>
                        </EuiFlexItem>
                    {{/each}}
                </EuiFlexGroup>
            </:content>
        </EuiPopover>
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        ComboBox: typeof ComboBox;
    }
}
