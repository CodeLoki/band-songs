import Component from '@glimmer/component';
import { calculateSetListLength } from 'band-songs/utils/songs';

import type { Song } from 'band-songs/utils/songs';
import type { DocumentSnapshot } from 'firebase/firestore';

export interface SetListTitleSignature {
    Args: {
        title: string;
        songs: DocumentSnapshot<Song>[];
    };
}

export default class SetListTitle extends Component<SetListTitleSignature> {
    get setLength(): string {
        return calculateSetListLength(this.args.songs);
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        SetListTitle: typeof SetListTitle;
    }
}
