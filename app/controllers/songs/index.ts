import BaseSongsController from './base-songs-controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { User, ActionMode } from 'band-songs/utils/songs';

import type { Registry as ServiceRegistry } from '@ember/service';
import type { ModelFrom } from 'band-songs/utils/general';
import type Route from 'band-songs/routes/songs';
import type { QueryDocumentSnapshot } from 'firebase/firestore';
import type { Song } from 'band-songs/utils/songs';

enum SongView {
    All = 'all',
    Practice = 'practice',
    Incomplete = 'incomplete'
}

export default class SongsIndexController extends BaseSongsController {
    @service declare firestore: ServiceRegistry['firestore'];

    declare model: ModelFrom<Route>;

    @tracked view = SongView.All;
    @tracked mode = ActionMode.Perform;

    lastScrollPosition = 0;

    viewOptions = [
        {
            value: SongView.All,
            text: 'All'
        },
        {
            value: SongView.Practice,
            text: 'Practice'
        },
        {
            value: SongView.Incomplete,
            text: 'Incomplete'
        }
    ];

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

    /**
     * The collection of songs to show based on teh current view.
     */
    get songs(): QueryDocumentSnapshot<Song>[] {
        const { view, model } = this,
            { songs } = model;

        if (model.user !== User.Me || view === SongView.All) {
            return songs;
        }

        return model.songs.filter((s) => {
            const d = s.data();

            if (view === SongView.Practice) {
                return !!d.practice;
            }

            if (view === SongView.Incomplete) {
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
