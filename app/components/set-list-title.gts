import Component from '@glimmer/component';
import EuiSpacer from '@ember-eui/core/components/eui-spacer';
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

    <template>
        <h3 class="setlist-title">{{@title}} ({{this.setLength}})</h3>
        <EuiSpacer @size="m" />
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        SetListTitle: typeof SetListTitle;
    }
}
