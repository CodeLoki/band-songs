import BaseSongsController from './base-songs-controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { TabSource } from 'band-songs/utils/songs';
import { User } from '../application';

import type Route from 'band-songs/routes/songs/index';
import type { ModelFrom } from 'band-songs/utils/general';

export default class SongsPracticeController extends BaseSongsController {
    declare model: ModelFrom<Route>;

    @tracked drumTabSource = TabSource.Songsterr;

    get isUserMe(): boolean {
        return this.model.user === User.Me;
    }

    get drumTabSources(): { value: TabSource; text: string }[] {
        return [
            {
                value: TabSource.Songsterr,
                text: 'Songsterr'
            },
            {
                value: TabSource.Drumeo,
                text: 'Drumeo'
            },
            {
                value: TabSource.GrooveScribe,
                text: 'GrooveScribe'
            },
            {
                value: TabSource.YouTubeMusic,
                text: 'YouTube Music'
            }
        ];
    }

    @action updateDrumTabSource(evt: Event): void {
        this.drumTabSource = Number((evt.target as HTMLSelectElement).value);
    }
}
