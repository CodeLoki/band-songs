import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { classify } from '@ember/string';
import { calculateSetListLength } from 'band-songs/db/songs';

import type { DocumentSnapshot } from 'firebase/firestore';
import type { Song } from 'band-songs/db/songs';

export type Setlist = 'one' | 'two' | 'pocket';

export interface SongBasketSignature {
    Args: {
        set: Setlist;
        allSongs: DocumentSnapshot<Song>[];
        selectedSongs: DocumentSnapshot<Song>[];
        addSong: (song: DocumentSnapshot<Song>, set: Setlist) => void;
        moveSong: (song: DocumentSnapshot<Song>, set: Setlist, shift: -1 | 1) => void;
        removeSong: (song: DocumentSnapshot<Song>, set: Setlist) => void;
        clearAll: (set: Setlist) => void;
    };
}

export default class SongBasket extends Component<SongBasketSignature> {
    @tracked selectedSong?: DocumentSnapshot<Song>;

    get setListTitle(): string {
        return `Set ${classify(this.args.set)} (${this.setLength})`;
    }

    getTitle = (song: DocumentSnapshot<Song>) => song.data()?.title ?? '';

    get setLength(): string {
        return calculateSetListLength(this.args.selectedSongs);
    }

    get enableArrowUp(): boolean {
        const { selectedSong } = this;
        return !!selectedSong && this.args.selectedSongs.indexOf(selectedSong) > 0;
    }

    get enableArrowDown(): boolean {
        const { selectedSong } = this,
            { selectedSongs } = this.args;

        return !!selectedSong && selectedSongs.indexOf(selectedSong) < selectedSongs.length - 1;
    }

    @action selectSong(song: DocumentSnapshot<Song>): void {
        this.selectedSong = this.selectedSong === song ? undefined : song;
    }

    @action moveSong(shift: -1 | 1): void {
        const { selectedSong } = this;
        if (selectedSong) {
            this.args.moveSong(selectedSong, this.args.set, shift);
        }
    }

    @action removeSong(): void {
        const { selectedSong } = this;
        if (selectedSong) {
            this.args.removeSong(selectedSong, this.args.set);
            this.selectedSong = undefined;
        }
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        SongBasket: typeof SongBasket;
    }
}
