import Component from '@glimmer/component';
import { service } from '@ember/service';
import { on } from '@ember/modifier';
import { action } from '@ember/object';
import EuiFlexItem from '@ember-eui/core/components/eui-flex-item';
import EuiSelect from '@ember-eui/core/components/eui-select';
import { User, ActionMode } from 'band-songs/utils/songs';

import type { Registry as ServiceRegistry } from '@ember/service';

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

    get modeOptions(): { value: ActionMode; text: string }[] {
        const options = [
            {
                value: ActionMode.Perform,
                text: 'Perform'
            },
            {
                value: ActionMode.Practice,
                text: 'Practice'
            },
            {
                value: ActionMode.Rehearse,
                text: 'Rehearse'
            }
        ];

        if (this.firestore.userCanEdit) {
            options.push({
                value: ActionMode.Edit,
                text: 'Edit'
            });

            options.push({
                value: ActionMode.Flag,
                text: 'Flag'
            });
        }

        return options;
    }

    @action updateMode(evt: Event): void {
        this.args.changeMode(Number((evt.target as HTMLSelectElement).value));
    }

    <template>
        {{#if this.isMe}}
            <EuiFlexItem @grow={{false}}>
                <EuiSelect @value={{@mode}} @options={{this.modeOptions}} {{on "change" this.updateMode}} />
            </EuiFlexItem>
        {{/if}}
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        ActionSelector: typeof ActionSelector;
    }
}
