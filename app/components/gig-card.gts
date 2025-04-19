import Component from '@glimmer/component';
import EuiCard from '@ember-eui/core/components/eui-card';
import getModelDataValue from 'band-songs/helpers/get-model-data-value';
import goTo from 'band-songs/helpers/go-to';

import type { Gig } from 'band-songs/utils/gigs';
import type { QueryDocumentSnapshot } from 'firebase/firestore';

export const GigDateFormatter = new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric'
});

export interface GigSignature {
    Args: {
        gig: QueryDocumentSnapshot<Gig>;
    };
}

export default class GigCard extends Component<GigSignature> {
    get title(): string {
        return GigDateFormatter.format(this.args.gig.data().date.toDate());
    }

    <template>
        <EuiCard
            @title={{this.title}}
            @description={{getModelDataValue @gig "venue"}}
            @onClick={{goTo "gig" @gig.id}}
        />
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        GigCard: typeof GigCard;
    }
}
