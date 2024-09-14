import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { addDoc, collection, updateDoc, Timestamp, deleteDoc, type DocumentSnapshot } from 'firebase/firestore';
import { GigDateFormatter } from 'band-songs/components/gig';
import { LaunchMode } from 'band-songs/components/song';

import type Route from 'band-songs/routes/gigs';
import type { ModelFrom } from 'band-songs/utils';
import type { Registry as ServiceRegistry } from '@ember/service';
import type { Song } from 'band-songs/db/songs';
import type { Setlist } from 'band-songs/components/song-basket';

const dayFormatter = new Intl.DateTimeFormat('en-US', {
    day: '2-digit'
});

const monthFormatter = new Intl.DateTimeFormat('en-US', {
    month: '2-digit'
});

const yearFormatter = new Intl.DateTimeFormat('en-US', {
    year: 'numeric'
});

export default class GigsController extends Controller {
    @service declare firestore: ServiceRegistry['firestore'];
    @service declare toast: ServiceRegistry['toast'];
    @service declare router: ServiceRegistry['router'];

    declare model: Awaited<ModelFrom<Route>>;

    @tracked isEditMode = false;
    @tracked showDeleteModal = false;
    @tracked mode = LaunchMode.Groove;

    @tracked date = new Date();
    @tracked venue = '';
    @tracked one: DocumentSnapshot<Song>[] = [];
    @tracked two: DocumentSnapshot<Song>[] = [];
    @tracked pocket: DocumentSnapshot<Song>[] = [];

    resetFields(model: Awaited<ModelFrom<Route>>): void {
        const data = model.gig?.data();

        Object.assign(this, {
            date: data?.date.toDate() ?? new Date(),
            one: model?.one.slice() ?? [],
            two: model?.two.slice() ?? [],
            pocket: model?.pocket.slice() ?? [],
            venue: data?.venue
        });
    }

    get disableSave(): boolean {
        return !this.venue || !this.one.length || !this.two.length;
    }

    get showEdit(): boolean {
        return !this.model.gig || this.isEditMode;
    }

    get title(): string {
        const { venue } = this;
        if (!venue) {
            return 'New Gig';
        }

        return `${venue} - ${GigDateFormatter.format(this.date)}`;
    }

    get formattedDate(): string {
        const { date } = this;
        return [yearFormatter, monthFormatter, dayFormatter].map((f) => f.format(date)).join('-');
    }

    get availableSongs(): DocumentSnapshot<Song>[] {
        const songs = [...this.one, ...this.two, ...this.pocket];
        return this.model.all.filter((song) => !songs.find(({ id }) => id === song.id));
    }

    private showToast(type: string): void {
        this.toast.showToast(`Gig "${this.title}" ${type}`);
    }

    @action updateVenue(evt: Event): void {
        this.venue = (evt.target as HTMLSelectElement).value;
    }

    @action updateDate(evt: Event): void {
        this.date = new Date(`${(evt.target as HTMLInputElement).value}T22:00:00.000Z`);
    }

    @action addSong(song: DocumentSnapshot<Song>, type: Setlist): void {
        this[type] = [...this[type], song];
    }

    @action moveSong(song: DocumentSnapshot<Song>, type: Setlist, shift: -1 | 1): void {
        const songs = this[type],
            from = songs.indexOf(song),
            to = from + shift;

        // @ts-expect-error: TS doesn't understand this.
        [songs[from], songs[to]] = [songs[to], songs[from]];
        this[type] = songs.slice();
    }

    @action removeSong(song: DocumentSnapshot<Song>, type: Setlist): void {
        this[type] = this[type].filter((s) => s !== song);
    }

    @action clearAll(type: Setlist): void {
        this[type] = [];
    }

    @action async saveGig(): Promise<void> {
        try {
            const { gig } = this.model,
                gnGetSongsRefs = (songs: DocumentSnapshot<Song>[]) => songs.map((s) => s.ref),
                data = {
                    band: this.model.band.ref,
                    date: Timestamp.fromDate(this.date),
                    venue: this.venue,
                    one: gnGetSongsRefs(this.one),
                    two: gnGetSongsRefs(this.two),
                    pocket: gnGetSongsRefs(this.pocket)
                };

            if (!gig) {
                const docRef = await addDoc(collection(this.firestore.db, 'gigs'), data);
                this.showToast('created');
                this.router.transitionTo(`/gigs/${docRef.id}`);
                return;
            }

            await updateDoc(gig.ref, data);
            this.showToast('update');
            this.isEditMode = false;
        } catch (ex) {
            this.toast.showError('saving', ex);
        }
    }

    @action async delete(): Promise<void> {
        try {
            const { gig } = this.model;
            if (gig) {
                await deleteDoc(gig.ref);
                this.showToast('deleted');
                this.router.transitionTo('index');
            }
        } catch (ex) {
            this.toast.showError('deleting', ex);
        }
    }

    @action cancel(): void {
        if (this.model.gig) {
            this.isEditMode = false;
            return;
        }

        this.router.transitionTo(`/`);
    }

    @action toggleDeleteModal(): void {
        this.showDeleteModal = !this.showDeleteModal;
    }
}
