import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { classify } from '@ember/string';
import EuiTitle from '@ember-eui/core/components/eui-title';
import { calculateSetListLength } from 'band-songs/utils/songs';
import ShoppingBasket from './shopping-basket';

import type { Song } from 'band-songs/utils/songs';
import type { DocumentSnapshot } from 'firebase/firestore';

export type Setlist = 'one' | 'two' | 'pocket';

export interface SongBasketSignature {
    Element: HTMLDivElement;
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
        const set = classify(this.args.set),
            name = set !== 'Pocket' ? `Set ${set}` : set;
        return `${name} (${this.setLength})`;
    }

    getTitle = (song: DocumentSnapshot<Song>): string => song.data()?.title ?? '';

    get setLength(): string {
        return calculateSetListLength(this.args.selectedSongs);
    }

    addSong = (song: DocumentSnapshot<Song>): void => {
        this.args.addSong(song, this.args.set);
    };

    moveSong = (song: DocumentSnapshot<Song>, shift: -1 | 1): void => {
        this.args.moveSong(song, this.args.set, shift);
    };

    removeSong = (song: DocumentSnapshot<Song>): void => {
        this.args.removeSong(song, this.args.set);
        if (this.selectedSong === song) {
            this.selectedSong = undefined;
        }
    };

    clearAll = (): void => {
        this.args.clearAll(this.args.set);
        this.selectedSong = undefined;
    };

    <template>
        <div ...attributes>
            <EuiTitle @size="s">
                <h5>{{this.setListTitle}}</h5>
            </EuiTitle>

            <ShoppingBasket
                @allItems={{@allSongs}}
                @selectedItems={{@selectedSongs}}
                @getItemLabel={{this.getTitle}}
                @addItem={{this.addSong}}
                @removeItem={{this.removeSong}}
                @moveItem={{this.moveSong}}
                @clearAll={{this.clearAll}}
            />
        </div>
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        SongBasket: typeof SongBasket;
    }
}
