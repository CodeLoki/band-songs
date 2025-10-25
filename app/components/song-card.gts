import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { service } from '@ember/service';
import EuiBadge from '@ember-eui/core/components/eui-badge';
import EuiCard from '@ember-eui/core/components/eui-card';
import EuiBadgeGroup from '@ember-eui/core/components/eui-badge-group';
import EuiPanel from '@ember-eui/core/components/eui-panel';
import EuiFlexItem from '@ember-eui/core/components/eui-flex-item';
import { onSnapshot, updateDoc } from 'firebase/firestore';
import { ActionMode, DrumPad, User, drumPadMap, startsWithMap, instrumentMap } from 'band-songs/utils/songs';
import { Instrument } from 'band-songs/utils/songs';

import type { EuiCardSignature } from '@ember-eui/core/components/eui-card';
import type { EuiBadgeSignature } from '@ember-eui/core/components/eui-badge';
import type Owner from '@ember/owner';
import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/utils/songs';
import type { DocumentSnapshot, Unsubscribe } from 'firebase/firestore';

export interface SongCardSignature {
    Element: EuiCardSignature['Element'];
    Args: {
        user: User;
        song: DocumentSnapshot<Song>;
        mode?: ActionMode;
        cacheScroll?: VoidFunction;
    };
}

enum TabSource {
    Songsterr,
    UltimateGuitar,
    LyricsGenius,
    GrooveScribe,
    YouTubeMusic
}

/**
 * Calculated tablature source website (based on user and whether performance or practice).
 */
function getTabSource(user: User, mode?: ActionMode): TabSource {
    if (user === User.Me) {
        return mode === ActionMode.Practice ? TabSource.Songsterr : TabSource.GrooveScribe;
    }

    if (user === User.Vocals) {
        return TabSource.LyricsGenius;
    }

    if (user === User.Guitars) {
        return TabSource.UltimateGuitar;
    }

    return TabSource.YouTubeMusic;
}

/**
 * Returns the URL for the passed tab source.
 */
function getTabLink(song: Song, tabSource: TabSource): string | undefined {
    const q = encodeURI(`${song.artist} ${song.title}`);

    if (tabSource === TabSource.YouTubeMusic) {
        const { ytMusic } = song;
        if (ytMusic) {
            return `https://www.youtube.com/watch?v=${ytMusic}`;
        }

        return `https://www.youtube.com/results?search_query=${q}`;
    }

    if (tabSource === TabSource.LyricsGenius) {
        return `https://genius.com/search?q=${q}`;
        // return `https://songmeanings.com/query/?query=${q}&type=songtitles`;
        // return `https://search.azlyrics.com/search.php?q=${q}`;
    }

    if (tabSource === TabSource.UltimateGuitar) {
        return `https://www.ultimate-guitar.com/search.php?search_type=title&value=${q}`;
    }

    if (tabSource === TabSource.Songsterr) {
        return `https://www.songsterr.com/?pattern=${q}&inst=drum`;
    }

    if (tabSource === TabSource.GrooveScribe) {
        return song.groove;
    }

    return undefined;
}

type Note = {
    icon: string;
    text: string;
    color: EuiBadgeSignature['Args']['color'];
};

export default class SongCard extends Component<SongCardSignature> {
    @service declare router: ServiceRegistry['router'];
    @service declare firestore: ServiceRegistry['firestore'];

    @tracked data: Song;
    unsub: Unsubscribe;

    constructor(owner: Owner, args: SongCardSignature['Args']) {
        super(owner, args);

        const { song } = this.args;

        // Cache data and subscribe to updates.
        this.data = song.data()!;
        this.unsub = onSnapshot(song.ref, (doc) => {
            this.data = doc.data()!;
        });
    }

    willDestroy(): void {
        super.willDestroy();
        this.unsub();
    }

    get isMe(): boolean {
        return this.args.user === User.Me;
    }

    get cardIcon(): string | undefined {
        if (this.isMe && this.data.practice) {
            return 'flag';
        }

        return undefined;
    }

    /**
     * Notes about the song.
     */
    get notes(): Note[] {
        const { data } = this,
            results: Note[] = [],
            fnAddNote = (text: string, icon = '', color: EuiBadgeSignature['Args']['color'] = 'primary'): number =>
                results.push({
                    icon,
                    text,
                    color
                });

        // Always show starts with.
        fnAddNote(startsWithMap.get(data.startsWith)!, 'clock');

        if (this.isMe) {
            const { pad } = data;
            if (pad > DrumPad.None) {
                fnAddNote(drumPadMap.get(pad)!, 'starFilled', 'warning');
            }

            const { notes } = data;
            if (notes) {
                fnAddNote(notes, 'shard', 'success');
            }
        }

        if (this.args.user === User.Mixer) {
            const { features, solos } = data;
            if (features && features !== Instrument.None) {
                fnAddNote(instrumentMap.get(features)!, 'starFilled', 'success');
            }

            if (solos?.length > 0) {
                solos.forEach((inst) => {
                    fnAddNote(instrumentMap.get(inst)!, 'bullseye', 'warning');
                });
            }
        }

        return results;
    }

    <template>
        <EuiFlexItem>
            <EuiCard
                @layout="horizontal"
                @title={{this.data.title}}
                @description={{this.data.artist}}
                @icon={{this.cardIcon}}
                @contentClassName="song-card-content"
                @onClick={{this.clickButton}}
                class="song-card"
                ...attributes
            >
                <:body>
                    {{#if this.notes}}
                        <EuiPanel @paddingSize="m" @hasShadow={{false}} class="song-notes">
                            <EuiBadgeGroup @gutterSize="xs" as |Group|>
                                {{#each this.notes as |note|}}
                                    <Group.item>
                                        <EuiBadge @iconType={{note.icon}} @color={{note.color}}>
                                            {{note.text}}
                                        </EuiBadge>
                                    </Group.item>
                                {{/each}}
                            </EuiBadgeGroup>
                        </EuiPanel>
                    {{/if}}
                </:body>
            </EuiCard>
        </EuiFlexItem>
    </template>

    /**
     * Executes the first button click when the card is clicked (when there is only one button).
     */
    clickButton = async (): Promise<void> => {
        const { args } = this,
            { mode } = args;

        if (this.firestore.userCanEdit && mode === ActionMode.Flag) {
            await this.togglePractice();
            return;
        }

        if (mode === ActionMode.Rehearse) {
            args.cacheScroll?.();
            this.router.transitionTo('songs.rehearse', args.song.id);
            return;
        }

        if (mode === ActionMode.Edit) {
            args.cacheScroll?.();
            this.router.transitionTo('songs.edit', args.song.id);
            return;
        }

        const link = getTabLink(this.data, getTabSource(args.user, mode));
        if (link) {
            window.open(link);
        }
    };

    /**
     * Toggles the needs practice song data.
     */
    togglePractice = async (): Promise<void> => {
        await updateDoc(this.args.song.ref, {
            practice: !this.data.practice
        });
    };
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        SongCard: typeof SongCard;
    }
}
