import SetListTitle from 'band-songs/components/set-list-title';
import EuiFlexGrid from '@ember-eui/core/components/eui-flex-grid';
import Song from 'band-songs/components/song';

import type { TOC } from '@ember/component/template-only';
import type { Gig } from 'band-songs/utils/gigs';
import type { ActionMode, Song as SongType, User } from 'band-songs/utils/songs';
import type { DocumentSnapshot } from 'firebase/firestore';

export interface SetListSignature {
    Args: {
        songs: DocumentSnapshot<SongType>[];
        user: User;
        gig?: DocumentSnapshot<Gig>;
        title?: string;
        mode?: ActionMode;
    };
}

const SetList: TOC<SetListSignature> = <template>
    {{#if @title}}
        <SetListTitle @title={{@title}} @songs={{@songs}} />
    {{/if}}

    <EuiFlexGrid @columns={{1}}>
        {{#each @songs as |song|}}
            <Song @user={{@user}} @song={{song}} @mode={{@mode}} />
        {{/each}}
    </EuiFlexGrid>
</template>;

export default SetList;

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        SetList: typeof SetList;
    }
}
