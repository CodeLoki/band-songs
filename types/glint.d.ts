import type { HelperLike } from '@glint/template';
import type EmberEuiRegistry from '@ember-eui/core/template-registry';
import type EmberTruthRegistry from 'ember-truth-helpers/template-registry';
import type RenderModifiersRegistry from '@ember/render-modifiers/template-registry';

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry extends EmberEuiRegistry, EmberTruthRegistry, RenderModifiersRegistry {
        'page-title': HelperLike<{
            Args: { Positional: [title: string] };
            Return: void;
        }>;

        await: HelperLike<{
            Args: { Positional: [Promise<T>] };
            Return: T;
        }>;
    }
}
