import Component from '@glimmer/component';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { startsWithMap, DrumPad, drumPadMap } from 'band-songs/db/songs';
import { action } from '@ember/object';
import type { DocumentSnapshot } from 'firebase/firestore';
import type { Song } from 'band-songs/db/songs';

type Note = {
    icon: string;
    text: string;
};

export interface SongCardSignature {
    // The arguments accepted by the component
    Args: {
        song: DocumentSnapshot<Song>;
        isEditMode?: boolean;
    };
}

export default class SongCard extends Component<SongCardSignature> {
    @service declare router: ServiceRegistry['router'];

    get data(): Song {
        return this.args.song.data()!;
    }

    get notes(): Note[] {
        const { startsWith, notes, pad } = this.data,
            results: Note[] = [],
            fnAddNote = (text: string, icon = '') =>
                results.push({
                    icon,
                    text
                });

        if (pad > DrumPad.None) {
            fnAddNote(drumPadMap.get(pad)!, 'starFilled');
        }

        if (notes) {
            fnAddNote(notes);
        }

        fnAddNote(startsWithMap.get(startsWith)!);

        return results;
    }

    @action onClick(): void {
        if (this.args.isEditMode) {
            this.router.transitionTo('songs.edit', this.args.song.id);
            return;
        }

        window.open(this.data.groove);
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        Song: typeof SongCard;
    }
}
