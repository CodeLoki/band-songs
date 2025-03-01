import Component from '@glimmer/component';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import {
    startsWithMap,
    DrumPad,
    drumPadMap,
    getTabSource,
    User,
    PerformanceMode,
    getTabLink
} from 'band-songs/utils/songs';
import { action } from '@ember/object';
import { updateDoc, onSnapshot, type DocumentSnapshot, type Unsubscribe } from 'firebase/firestore';

import type { Song } from 'band-songs/utils/songs';
import type { EuiCardSignature } from '@ember-eui/core/components/eui-card';
import type { EuiButtonIconSignature } from '@ember-eui/core/components/eui-button-icon';

type Note = {
    icon: string;
    text: string;
};

type ButtonConfig = Pick<EuiButtonIconSignature['Args'], 'color' | 'iconType'> & {
    text: string;
    click: VoidFunction;
};

export interface SongCardSignature {
    Element: EuiCardSignature['Element'];
    Args: {
        user: User;
        song: DocumentSnapshot<Song>;
        mode?: PerformanceMode;
        cacheScroll?: VoidFunction;
    };
}

export default class SongCard extends Component<SongCardSignature> {
    @service declare router: ServiceRegistry['router'];
    @service declare firestore: ServiceRegistry['firestore'];

    @tracked data: Song;
    unsub: Unsubscribe;

    constructor(owner: unknown, args: SongCardSignature['Args']) {
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

    /**
     * Notes about the song.
     */
    get notes(): Note[] {
        const { data } = this,
            results: Note[] = [],
            fnAddNote = (text: string, icon = ''): number =>
                results.push({
                    icon,
                    text
                });

        if (this.args.user === User.Me) {
            const { pad } = data;
            if (pad > DrumPad.None) {
                fnAddNote(drumPadMap.get(pad)!, 'starFilled');
            }

            const { notes } = data;
            if (notes) {
                fnAddNote(notes);
            }
        }

        fnAddNote(startsWithMap.get(data.startsWith)!);

        return results;
    }

    /**
     * External link to tablature.
     */
    get tabLink(): VoidFunction | undefined {
        const { args } = this,
            { mode } = args;

        if (mode === PerformanceMode.rehearse) {
            return () => {
                args.cacheScroll?.();
                this.router.transitionTo('songs.rehearse', args.song.id);
            };
        }

        if (mode === PerformanceMode.edit) {
            return () => {
                args.cacheScroll?.();
                this.router.transitionTo('songs.edit', args.song.id);
            };
        }

        const link = getTabLink(this.data, getTabSource(args.user, mode));
        return link ? (): ReturnType<Window['open']> => window.open(link) : undefined;
    }

    /**
     * Action buttons (based on user and environment).
     */
    get buttons(): ButtonConfig[] {
        const buttons: ButtonConfig[] = [],
            fnAddButton = (
                text: ButtonConfig['text'],
                icon: ButtonConfig['iconType'],
                click: ButtonConfig['click'],
                isActive = false
            ): number =>
                buttons.push({
                    text,
                    iconType: icon ?? 'globe',
                    click,
                    color: isActive ? 'warning' : 'text'
                });

        const { tabLink } = this;
        if (tabLink) {
            fnAddButton('Execute', 'watchesApp', tabLink);
        }

        if (this.firestore.userCanEdit) {
            fnAddButton('Needs Practice', 'flag', () => this.needsPractice(), !!this.data.practice);
        }

        return buttons;
    }

    /**
     * Indicates there is only one button, so should be tied to card click.
     */
    get useCardClick(): boolean {
        return this.buttons.length === 1;
    }

    /**
     * Indicates whether to show the row of buttons.
     */
    get showButtons(): boolean {
        return this.buttons.length > 1;
    }

    /**
     * Executes the first button click when the card is clicked (when there is only one button).
     */
    @action clickFirstButton(): void {
        const [btn] = this.buttons;
        if (btn) {
            btn.click();
        }
    }

    /**
     * Transitions to the edit route for the current song.
     */
    @action edit(): void {
        this.args.cacheScroll?.();
        this.router.transitionTo('songs.edit', this.args.song.id);
    }

    /**
     * Toggles the needs practice song data.
     */
    @action needsPractice(): void {
        updateDoc(this.args.song.ref, {
            practice: !this.data.practice
        });
    }
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        Song: typeof SongCard;
    }
}
