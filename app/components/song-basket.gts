import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { classify } from '@ember/string';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import not from 'band-songs/helpers/not';
import eq from 'band-songs/helpers/eq';
import EuiBadge from '@ember-eui/core/components/eui-badge';
import EuiBadgeGroup from '@ember-eui/core/components/eui-badge-group';
import EuiButtonIcon from '@ember-eui/core/components/eui-button-icon';
import EuiFlexGroup from '@ember-eui/core/components/eui-flex-group';
import EuiFlexItem from '@ember-eui/core/components/eui-flex-item';
import EuiPanel from '@ember-eui/core/components/eui-panel';
import EuiSpacer from '@ember-eui/core/components/eui-spacer';
import EuiTitle from '@ember-eui/core/components/eui-title';
import { calculateSetListLength } from 'band-songs/utils/songs';

import type { Song } from 'band-songs/utils/songs';
import type { DocumentSnapshot } from 'firebase/firestore';

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
        const set = classify(this.args.set),
            name = set !== 'Pocket' ? `Set ${set}` : set;
        return `${name} (${this.setLength})`;
    }

    getTitle = (song: DocumentSnapshot<Song>): string => song.data()?.title ?? '';

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

    <template>
        <EuiTitle @size="s">
            <h5>{{this.setListTitle}}</h5>
        </EuiTitle>

        <EuiFlexGroup>
            <EuiFlexItem>
                <EuiPanel @hasBorder={{true}}>
                    <EuiBadgeGroup @gutterSize="xs" as |Group|>
                        {{#each @allSongs as |song|}}
                            <Group.item>
                                <EuiBadge @color="#666" @onClick={{fn @addSong song @set}}>
                                    {{this.getTitle song}}
                                </EuiBadge>
                            </Group.item>
                        {{/each}}
                    </EuiBadgeGroup>
                </EuiPanel>
            </EuiFlexItem>

            <EuiFlexItem>
                <EuiPanel @paddingSize="s" @hasBorder={{true}}>
                    <EuiBadgeGroup @gutterSize="xs" as |Group|>
                        {{#each @selectedSongs as |song|}}
                            <Group.item>
                                <EuiBadge
                                    @color={{if (eq song this.selectedSong) "primary" "hollow"}}
                                    @onClick={{fn this.selectSong song}}
                                >
                                    {{this.getTitle song}}
                                </EuiBadge>
                            </Group.item>
                        {{/each}}
                    </EuiBadgeGroup>
                </EuiPanel>
            </EuiFlexItem>

            <EuiFlexItem @grow={{false}}>
                <EuiFlexGroup @direction="column" @gutterSize="m">
                    <EuiButtonIcon
                        @iconType="arrowUp"
                        @isDisabled={{not this.enableArrowUp}}
                        @size="m"
                        aria-label="Move up"
                        {{on "click" (fn this.moveSong -1)}}
                    />
                    <EuiButtonIcon
                        @iconType="arrowDown"
                        @isDisabled={{not this.enableArrowDown}}
                        @size="m"
                        aria-label="Move down"
                        {{on "click" (fn this.moveSong 1)}}
                    />
                    <EuiButtonIcon
                        @iconType="cross"
                        @isDisabled={{not this.selectedSong}}
                        @size="m"
                        aria-label="Remove song"
                        {{on "click" this.removeSong}}
                    />
                    <EuiSpacer />
                    <EuiButtonIcon
                        @iconType="trash"
                        @size="m"
                        aria-label="Clear all"
                        {{on "click" (fn @clearAll @set)}}
                    />
                </EuiFlexGroup>
            </EuiFlexItem>

        </EuiFlexGroup>
    </template>

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
