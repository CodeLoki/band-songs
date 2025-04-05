import Component from '@glimmer/component';
import { service } from '@ember/service';
import ComboBox from './combo-box';
import EuiFlexItem from '@ember-eui/core/components/eui-flex-item';
import { User, ActionMode } from 'band-songs/utils/songs';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { EuiButtonSignature } from '@ember-eui/core/components/eui-button';
import type { OptionInfo } from './combo-box';

export interface ActionSelectorSignature {
    Args: {
        mode: ActionMode;
        user: User;
        changeMode: (mode: ActionMode) => void;
    };
}

export default class ActionSelector extends Component<ActionSelectorSignature> {
    @service declare firestore: ServiceRegistry['firestore'];

    get isMe(): boolean {
        return this.args.user === User.Me;
    }

    private getIcon(mode: ActionMode): EuiButtonSignature['Args']['iconType'] {
        return {
            [ActionMode.Perform]: 'crosshairs',
            [ActionMode.Practice]: 'infinity',
            [ActionMode.Rehearse]: 'broom',
            [ActionMode.Edit]: 'documentEdit',
            [ActionMode.Flag]: 'flag'
        }[mode];
    }

    get modeOptions(): OptionInfo<ActionMode>[] {
        const options: OptionInfo<ActionMode>[] = [],
            fnAddOption = (mode: ActionMode): void => {
                options.push({
                    value: mode,
                    text: ActionMode[mode],
                    icon: this.getIcon(mode)
                });
            };

        fnAddOption(ActionMode.Perform);
        fnAddOption(ActionMode.Practice);
        fnAddOption(ActionMode.Rehearse);

        if (this.firestore.userCanEdit) {
            fnAddOption(ActionMode.Edit);
            fnAddOption(ActionMode.Flag);
        }

        return options;
    }

    get selectedOption(): OptionInfo<ActionMode> {
        return this.modeOptions.find((opt) => opt.value === this.args.mode)!;
    }

    <template>
        {{#if this.isMe}}
            <EuiFlexItem @grow={{false}}>
                <ComboBox
                    @options={{this.modeOptions}}
                    @selectedOption={{this.selectedOption}}
                    @changeSelection={{@changeMode}}
                />
            </EuiFlexItem>
        {{/if}}
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        ActionSelector: typeof ActionSelector;
    }
}
