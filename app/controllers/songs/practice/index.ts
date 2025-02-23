import BaseSongsController from '../base-songs-controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { TabSource } from 'band-songs/utils/songs';

import type Route from 'band-songs/routes/songs/practice';
import type { ModelFrom } from 'band-songs/utils/general';

export default class SongsPracticeController extends BaseSongsController {
    declare model: ModelFrom<Route>;

    @tracked drumTabSource = TabSource.Rehearse;

    get drumTabSources(): { value: TabSource; text: string }[] {
        return [
            {
                value: TabSource.Rehearse,
                text: 'Rehearse'
            },
            {
                value: TabSource.Songsterr,
                text: 'Songsterr'
            },
            {
                value: TabSource.Drumeo,
                text: 'Drumeo'
            }
        ];
    }

    @action updateDrumTabSource(evt: Event): void {
        this.drumTabSource = Number((evt.target as HTMLSelectElement).value);
    }
}
