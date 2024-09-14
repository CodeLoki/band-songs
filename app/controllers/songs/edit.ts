import Controller from '@ember/controller';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { StartsWith, startsWithMap, DrumPad, drumPadMap } from 'band-songs/db/songs';
import { collection, addDoc, updateDoc, deleteDoc } from 'firebase/firestore';

import type { Registry as ServiceRegistry } from '@ember/service';
import type Route from 'band-songs/routes/songs/edit';
import type { ModelFrom } from 'band-songs/utils';

type StartsWithItem = {
    value: StartsWith;
    text: string;
};

type PadItem = {
    value: DrumPad;
    text: string;
};

export default class SongsEditController extends Controller {
    @service declare firestore: ServiceRegistry['firestore'];
    @service declare router: ServiceRegistry['router'];
    @service declare toast: ServiceRegistry['toast'];

    declare model: Awaited<ModelFrom<Route>>;

    @tracked title = '';
    @tracked artist = '';
    @tracked length = 0;
    @tracked startsWith = StartsWith.All;
    @tracked groove = '';
    @tracked notes = '';
    @tracked pad = DrumPad.None;
    @tracked selectedBands: Record<string, boolean> = {};

    @tracked showDeleteModal = false;

    resetFields(model: Awaited<ModelFrom<Route>>) {
        const data = model.song?.data();

        Object.assign(this, {
            title: data?.title ?? '',
            artist: data?.artist ?? '',
            length: data?.length ?? 0,
            startsWith: data?.startsWith ?? StartsWith.All,
            groove: data?.groove ?? '',
            notes: data?.notes ?? '',
            pad: data?.pad ?? DrumPad.None,
            selectedBands: (data?.bands ?? model.bands).reduce<Record<string, boolean>>(
                (m, band) => ({
                    ...m,
                    [band.id]: band.id === this.model.band.id
                }),
                {}
            )
        });
    }

    get startsWithOptions(): StartsWithItem[] {
        const items: StartsWithItem[] = [];

        startsWithMap.forEach((text, value) => {
            items.push({ value, text });
        });

        return items;
    }

    get padOptions(): PadItem[] {
        const items: PadItem[] = [];

        drumPadMap.forEach((text, value) => {
            items.push({ text, value });
        });

        return items;
    }

    get bandOptions(): { value: string; label: string }[] {
        return this.model.bands.map((band) => ({
            value: band.id,
            label: band.data()?.description ?? 'Band data failed'
        }));
    }

    private showToast(type: string): void {
        this.toast.showToast(`Song "${this.title}" ${type}`);
    }

    @action updateStringValue(n: 'title' | 'artist' | 'groove' | 'notes', evt: Event): void {
        this[n] = (evt.target as HTMLInputElement).value ?? '';
    }

    @action updateNumberValue(n: 'length', evt: Event): void {
        this[n] = parseInt((evt.target as HTMLInputElement).value ?? '0', 10);
    }

    @action updateStartsWith(evt: Event): void {
        this.startsWith = Number((evt.target as HTMLSelectElement).value) as StartsWith;
    }

    @action updatePad(evt: Event): void {
        this.pad = Number((evt.target as HTMLSelectElement).value) as DrumPad;
    }

    @action selectBands(id: string): void {
        this.selectedBands = {
            ...this.selectedBands,
            ...{
                [id]: !this.selectedBands[id]
            }
        };
    }

    @action async save(): Promise<void> {
        try {
            const { model } = this,
                data = {
                    artist: this.artist,
                    title: this.title,
                    length: this.length,
                    startsWith: this.startsWith,
                    groove: this.groove,
                    notes: this.notes,
                    pad: this.pad,
                    bands: Object.entries(this.selectedBands)
                        .map(([id, isSelected]) => (isSelected ? model.bands.find((b) => b.id === id)?.ref : undefined))
                        .filter((b) => !!b)
                };

            if (!model.song) {
                await addDoc(collection(this.firestore.db, 'songs'), data);
                this.showToast('created');
            } else {
                await updateDoc(model.song.ref, data);
                this.showToast('updated');
            }

            this.router.transitionTo('/songs');
        } catch (ex) {
            this.toast.showError('saving', ex);
        }
    }

    @action toggleDeleteModal(): void {
        this.showDeleteModal = !this.showDeleteModal;
    }

    @action async delete(): Promise<void> {
        try {
            const { model } = this;
            if (model.song) {
                await deleteDoc(model.song.ref);
                this.showToast('deleted');
                this.router.transitionTo('/songs');
            }
        } catch (ex) {
            this.toast.showError('deleting', ex);
        }
    }
}
