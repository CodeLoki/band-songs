import Component from '@glimmer/component';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { startsWithMap, DrumPad, drumPadMap } from 'band-songs/db/songs';
import { action } from '@ember/object';
import type { DocumentSnapshot } from 'firebase/firestore';
import type { Song } from 'band-songs/db/songs';
import type { EuiCardSignature } from '@ember-eui/core/components/eui-card';

type Note = {
    icon: string;
    text: string;
};

export interface SongCardSignature {
    Element: EuiCardSignature['Element'];
    Args: {
        song: DocumentSnapshot<Song>;
        songEditing?: VoidFunction;
    };
}

export default class SongCard extends Component<SongCardSignature> {
    @service declare router: ServiceRegistry['router'];
    @service declare firestore: ServiceRegistry['firestore'];

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

    get lyricsLink(): string {
        if (['Group W Bench', 'Convertible Jerk'].some((n) => this.data.artist === n)) {
            return '';
        }

        const { data } = this,
            q = encodeURI(`${data.artist} ${data.title}`);

        return `https://search.azlyrics.com/search.php?q=${q}`;
    }

    get showIndicators(): boolean {
        const { data } = this;
        return this.firestore.userCanEdit || !!(data.drumeo || data.groove || this.lyricsLink);
    }

    get isDrumeo(): boolean {
        const { drumeo } = this.data;
        return drumeo.includes('musora') || drumeo.includes('drumeo');
    }

    @action edit(): void {
        this.args.songEditing?.();
        this.router.transitionTo('songs.edit', this.args.song.id);
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        Song: typeof SongCard;
    }
}
