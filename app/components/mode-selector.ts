import Component from '@glimmer/component';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { LaunchMode } from 'band-songs/components/song';

export interface ModeSelectorSignature {
    Args: {
        mode: LaunchMode;
        changeMode(mode: LaunchMode): void;
        omitEdit?: boolean;
    };
}

const iconMap = {
    [LaunchMode.Groove]: 'flag',
    [LaunchMode.Drumeo]: 'function',
    [LaunchMode.Lyrics]: 'discuss',
    [LaunchMode.Edit]: 'documentEdit'
};

export default class ModeSelector extends Component<ModeSelectorSignature> {
    @service declare firestore: ServiceRegistry['firestore'];

    @tracked isOpen = false;

    get icon(): string {
        return iconMap[this.args.mode];
    }

    get modes(): { text: string; mode: LaunchMode; icon: string }[] {
        const fn = (text: string, mode: LaunchMode) => ({
                text,
                mode,
                icon: iconMap[mode]
            }),
            items = [
                fn('GrooveScribe', LaunchMode.Groove),
                fn('Drumeo', LaunchMode.Drumeo),
                fn('Lyrics', LaunchMode.Lyrics)
            ];

        if (!this.args.omitEdit && this.firestore.userCanEdit) {
            items.push(fn('Edit', LaunchMode.Edit));
        }

        return items;
    }

    @action changeMode(mode: LaunchMode): void {
        this.isOpen = false;
        this.args.changeMode(mode);
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        ModeSelector: typeof ModeSelector;
    }
}
