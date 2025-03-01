import BaseSongsController from './base-songs-controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { User, PerformanceMode } from 'band-songs/utils/songs';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { ModelFrom } from 'band-songs/utils/general';
import type Route from 'band-songs/routes/songs';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import type { Song } from 'band-songs/utils/songs';

enum SongView {
    all = 'all',
    practice = 'practice',
    incomplete = 'incomplete'
}

export default class SongsIndexController extends BaseSongsController {
    @service declare firestore: ServiceRegistry['firestore'];

    declare model: ModelFrom<Route>;

    @tracked view = SongView.all;
    @tracked mode = PerformanceMode.perform;

    lastScrollPosition = 0;

    viewOptions = [
        {
            value: SongView.all,
            text: 'All'
        },
        {
            value: SongView.practice,
            text: 'Practice'
        },
        {
            value: SongView.incomplete,
            text: 'Incomplete'
        }
    ];

    get modeOptions(): { value: PerformanceMode; text: string }[] {
        const options = [
            {
                value: PerformanceMode.perform,
                text: 'Perform'
            },
            {
                value: PerformanceMode.practice,
                text: 'Practice'
            },
            {
                value: PerformanceMode.rehearse,
                text: 'Rehearse'
            }
        ];

        if (this.firestore.userCanEdit) {
            options.push({
                value: PerformanceMode.edit,
                text: 'Edit'
            });
        }

        return options;
    }

    /**
     * The collection of songs to show based on teh current view.
     */
    get songs(): QueryDocumentSnapshot<Song>[] {
        const { view, model } = this,
            { songs } = model;

        if (model.user !== User.Me || view === SongView.all) {
            return songs;
        }

        return model.songs.filter((s) => {
            const d = s.data();

            if (view === SongView.practice) {
                return !!d.practice;
            }

            if (view === SongView.incomplete) {
                return d.groove === '' || !d.ytMusic;
            }

            return false;
        });
    }

    @action updateView(evt: Event): void {
        this.view = (evt.target as HTMLSelectElement).value as SongView;
    }

    @action updateMode(evt: Event): void {
        this.mode = Number((evt.target as HTMLSelectElement).value);
    }
}
