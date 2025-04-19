import templateOnlyComponent from '@ember/component/template-only';

import type { Gig } from 'band-songs/utils/gigs';
import type { ActionMode, Song, User } from 'band-songs/utils/songs';
import type { DocumentSnapshot } from 'firebase/firestore';

export interface SetListSignature {
    Args: {
        songs: DocumentSnapshot<Song>[];
        user: User;
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
