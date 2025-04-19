import { tracked } from '@glimmer/tracking';
import { User } from 'band-songs/utils/songs';
import BaseSongsController from './base-songs-controller';

import type Route from 'band-songs/routes/songs';
import type { ModelFrom } from 'band-songs/utils/general';
import type { Song } from 'band-songs/utils/songs';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

enum SongView {
    All = 'all',
    Practice = 'practice',
    Incomplete = 'incomplete'
}

export default class SongsIndexController extends BaseSongsController {
    declare model: ModelFrom<Route>;

    @tracked view = SongView.All;

    viewOptions: { value: SongView; text: string }[] = [
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

    get selectedView(): SongsIndexController['viewOptions'][0] {
        return this.viewOptions.find((o) => o.value === this.view)!;
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

        return songs.filter((s) => {
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
}
