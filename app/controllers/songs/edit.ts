import { tracked } from '@glimmer/tracking';
import { A } from '@ember/array';
import Controller from '@ember/controller';
import { service } from '@ember/service';
import { addDoc, collection, deleteDoc, updateDoc } from 'firebase/firestore';
import { DrumPad, Instrument, StartsWith, drumPadMap, instrumentMap, startsWithMap } from 'band-songs/utils/songs';

import type { Registry as ServiceRegistry } from '@ember/service';
import type Route from 'band-songs/routes/songs/edit';
import type { ModelFrom } from 'band-songs/utils/general';

type Options<T> = {
    value: T;
    text: string;
};

export default class SongsEditController extends Controller {
    @service declare firestore: ServiceRegistry['firestore'];
    @service declare toast: ServiceRegistry['toast'];

    declare model: Awaited<ModelFrom<Route>>;

    @tracked title = '';
    @tracked artist = '';
    @tracked length = 0;
    @tracked startsWith = StartsWith.All;
    @tracked features = Instrument.None;
    @tracked solos: Instrument[] = [];
    @tracked selectedBands: Record<string, boolean> = {};

    @tracked groove = '';
    @tracked ytMusic = '';
    @tracked notes = '';
    @tracked pad = DrumPad.None;
    @tracked practice = false;

    @tracked showDeleteModal = false;

    resetFields(model: Awaited<ModelFrom<Route>>): void {
        const data = model.song?.data();

        Object.assign(this, {
            title: data?.title ?? '',
            artist: data?.artist ?? '',
            length: data?.length ?? 0,
            startsWith: data?.startsWith ?? StartsWith.All,
            features: data?.features ?? Instrument.None,
            solos: data?.solos ?? [],

            selectedBands: (data?.bands ?? model.bands).reduce<Record<string, boolean>>(
                (m, band) => ({
                    ...m,
                    [band.id]: band.id === this.model.band.id
                }),
                {}
            ),

            // Me
            groove: data?.groove ?? '',
            ytMusic: data?.ytMusic ?? '',
            notes: data?.notes ?? '',
            pad: data?.pad ?? DrumPad.None,
            practice: data?.practice ?? false
        });
    }

    private getOptionsFromEnum<T>(map: Map<T, string>): Options<T>[] {
        const items: Options<T>[] = [];

        map.forEach((text, value) => {
            items.push({ value, text });
        });

        // Sort so 'None' is always first, then alphabetically
        return A(items).sort((a, b) => {
            if (a.text === 'None') return -1;
            if (b.text === 'None') return 1;
            return a.text.localeCompare(b.text);
        });
    }

    get startsWithOptions(): Options<StartsWith>[] {
        return this.getOptionsFromEnum<StartsWith>(startsWithMap);
    }

    get featuresOptions(): Options<Instrument>[] {
        return this.getOptionsFromEnum<Instrument>(instrumentMap);
    }

    get padOptions(): Options<DrumPad>[] {
        return this.getOptionsFromEnum<DrumPad>(drumPadMap);
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

    updateStringValue = (n: 'title' | 'artist' | 'groove' | 'ytMusic' | 'notes', evt: Event): void => {
        this[n] = (evt.target as HTMLInputElement).value ?? '';
    };

    updateNumberValue = (n: 'length', evt: Event): void => {
        this[n] = parseInt((evt.target as HTMLInputElement).value ?? '0', 10);
    };

    updateStartsWith = (evt: Event): void => {
        this.startsWith = Number((evt.target as HTMLSelectElement).value) as StartsWith;
    };

    updateFeatures = (evt: Event): void => {
        this.features = Number((evt.target as HTMLSelectElement).value) as Instrument;
    };

    updateSolos = (instruments: Instrument[]): void => {
        this.solos = instruments;
    };

    updatePad = (evt: Event): void => {
        this.pad = Number((evt.target as HTMLSelectElement).value) as DrumPad;
    };

    selectBands = (id: string): void => {
        this.selectedBands = {
            ...this.selectedBands,
            ...{
                [id]: !this.selectedBands[id]
            }
        };
    };

    flagForPractice = (evt: Event): void => {
        this.practice = (evt.target as HTMLInputElement).checked;
    };

    goBack = (): void => {
        window.history.back();
    };

    save = async (): Promise<void> => {
        try {
            const { model } = this,
                data = {
                    artist: this.artist,
                    title: this.title,
                    length: this.length,
                    startsWith: this.startsWith,
                    features: this.features,
                    solos: this.solos,
                    groove: this.groove,
                    ytMusic: this.ytMusic,
                    notes: this.notes,
                    pad: this.pad,
                    bands: Object.entries(this.selectedBands)
                        .map(([id, isSelected]) => (isSelected ? model.bands.find((b) => b.id === id)?.ref : undefined))
                        .filter((b) => !!b),
                    practice: this.practice
                };

            if (!model.song) {
                await addDoc(collection(this.firestore.db, 'songs'), data);
                this.showToast('created');
            } else {
                await updateDoc(model.song.ref, data);
                this.showToast('updated');
            }

            this.goBack();
        } catch (ex) {
            this.toast.showError('saving', ex);
        }
    };

    toggleDeleteModal = (): void => {
        this.showDeleteModal = !this.showDeleteModal;
    };

    delete = async (): Promise<void> => {
        try {
            const { model } = this;
            if (model.song) {
                await deleteDoc(model.song.ref);
                this.showToast('deleted');
                this.goBack();
            }
        } catch (ex) {
            this.toast.showError('deleting', ex);
        }
    };
}
