import templateOnlyComponent from '@ember/component/template-only';

import type { Gig } from 'band-songs/utils/gigs';
import type { ActionMode, Song } from 'band-songs/utils/songs';
import type { DocumentSnapshot } from 'firebase/firestore';
import type { SongCardSignature } from './song';

export interface SetListSignature {
    Args: {
        songs: DocumentSnapshot<Song>[];
        user: SongCardSignature['Args']['user'];
        gig?: DocumentSnapshot<Gig>;
        title?: string;
        mode?: ActionMode;
    };
}

const SetList = templateOnlyComponent<SetListSignature>();
export default SetList;

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        SetList: typeof SetList;
    }
}
