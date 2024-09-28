import Component from '@glimmer/component';
import { calculateSetListLength } from 'band-songs/db/songs';

import { type DocumentSnapshot } from 'firebase/firestore';
import type { Song } from 'band-songs/db/songs';
import type { Gig } from 'band-songs/db/gigs';
import type { SongCardSignature } from './song';

export interface SetListSignature {
    Args: {
        title: string;
        songs: DocumentSnapshot<Song>[];
        user: SongCardSignature['Args']['user'];
        gig?: DocumentSnapshot<Gig>;
    };
}

export default class SetList extends Component<SetListSignature> {
    get setLength(): string {
        return calculateSetListLength(this.args.songs);
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        SetList: typeof SetList;
    }
}
