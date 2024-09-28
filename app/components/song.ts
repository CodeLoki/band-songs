import Component from '@glimmer/component';
import { service, type Registry as ServiceRegistry } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { startsWithMap, DrumPad, drumPadMap } from 'band-songs/db/songs';
import { action } from '@ember/object';
import { updateDoc, onSnapshot, type DocumentSnapshot, type Unsubscribe } from 'firebase/firestore';
import type { Song } from 'band-songs/db/songs';
import type { EuiCardSignature } from '@ember-eui/core/components/eui-card';
import type { User } from 'band-songs/controllers/application';
import type { EuiButtonIconSignature } from '@ember-eui/core/components/eui-button-icon';

type Note = {
    icon: string;
    text: string;
};

type ButtonConfig = {
    text: string;
    icon: EuiButtonIconSignature['Args']['iconType'];
    click: VoidFunction;
    color: EuiButtonIconSignature['Args']['color'];
};

export interface SongCardSignature {
    Element: EuiCardSignature['Element'];
    Args: {
        user: User;
        song: DocumentSnapshot<Song>;
        songEditing?: VoidFunction;
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

    get notes(): Note[] {
        const { startsWith, notes, pad } = this.data,
            { user } = this.args,
            results: Note[] = [],
            fnAddNote = (text: string, icon = '') =>
                results.push({
                    icon,
                    text
                });

        // Is the user drummer AND is there a pad?
        if (user === 'd' && pad > DrumPad.None) {
            fnAddNote(drumPadMap.get(pad)!, 'starFilled');
        }

        if (notes) {
            fnAddNote(notes);
        }

        fnAddNote(startsWithMap.get(startsWith)!);

        return results;
    }

    get buttons(): ButtonConfig[] {
        const { user } = this.args;
        if (!user) {
            return [];
        }

        const buttons: ButtonConfig[] = [],
            fnAddButton = (
                text: ButtonConfig['text'],
                icon: ButtonConfig['icon'],
                click: ButtonConfig['click'],
                isPrimary = false
            ): ButtonConfig => ({
                text,
                icon: icon ?? 'packetbeatApp',
                click,
                color: isPrimary ? 'primary' : 'text'
            });

        if (user === 'v') {
            const { lyricsLink } = this;
            if (lyricsLink) {
                buttons.push(fnAddButton('Lyrics', 'discuss', () => this.openExternalLink(lyricsLink)));
            }
        }

        if (user === 'd') {
            const { groove, drumeo } = this.data;

            if (groove) {
                buttons.push(fnAddButton('GrooveScribe Tab', 'packetbeatApp', () => this.openExternalLink(groove)));
            }

            if (drumeo) {
                buttons.push(
                    fnAddButton(
                        'Generic Tab',
                        'metricbeatApp',
                        () => this.openExternalLink(drumeo),
                        drumeo.includes('musora') || drumeo.includes('drumeo')
                    )
                );
            }
        }

        if (this.firestore.userCanEdit) {
            buttons.push(fnAddButton('Needs Practice', 'flag', () => this.needsPractice(), !!this.data.practice));
            buttons.push(fnAddButton('Edit Song', 'documentEdit', () => this.edit()));
        }

        return buttons;
    }

    get lyricsLink(): string {
        if (['Group W Bench', 'Convertible Jerk'].some((n) => this.data.artist === n)) {
            return '';
        }

        const { artist, title } = this.data,
            q = encodeURI(`${artist} ${title}`);

        // return `https://songmeanings.com/query/?query=${q}&type=songtitles`;
        // return `https://search.azlyrics.com/search.php?q=${q}`;
        return `https://genius.com/search?q=${q}`;
    }

    /**
     * Indicates there is only one buttons, so should be tied to card click.
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
     * Executes the first button click when the card is clicked (only if there is one button).
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
        this.args.songEditing?.();
        this.router.transitionTo('songs.edit', this.args.song.id);
    }

    /**
     * Opens an external link.
     */
    @action openExternalLink(uri: string): void {
        window.open(uri);
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
