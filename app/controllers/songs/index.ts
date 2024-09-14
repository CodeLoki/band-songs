import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { action } from '@ember/object';
import { LaunchMode } from 'band-songs/components/song';

import type Route from 'band-songs/routes/songs/index';
import type { ModelFrom } from 'band-songs/utils';

export default class SongsIndexController extends Controller {
    @service declare firestore: ServiceRegistry['firestore'];

    declare model: ModelFrom<Route>;

    @tracked mode = LaunchMode.Groove;
    @tracked isLaunchSelectorOpen = false;

    get modes(): { text: string; mode: LaunchMode }[] {
        const fn = (text: string, mode: LaunchMode) => ({
                text,
                mode
            }),
            items = [
                fn('GrooveScribe', LaunchMode.Groove),
                fn('Drummeo', LaunchMode.Drummeo),
                fn('Lyrics', LaunchMode.Lyrics)
            ];

        if (this.firestore.userCanEdit) {
            items.push(fn('Edit', LaunchMode.Edit));
        }

        return items;
    }

    @action changeMode(mode: LaunchMode): void {
        this.isLaunchSelectorOpen = false;
        this.mode = mode;
    }
}
