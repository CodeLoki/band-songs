import Component from '@glimmer/component';
import { getDoc } from 'firebase/firestore';

import type { Gig } from 'band-songs/db/gigs';
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

    get venue(): Promise<string> {
        return (async () => {
            const venue = await getDoc(this.args.gig.data().venue);
            return venue.data()?.description ?? '';
        })();
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        Gig: typeof GigCard;
    }
}
