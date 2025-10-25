import Component from '@glimmer/component';
import { Instrument, instrumentMap } from 'band-songs/utils/songs';
import ShoppingBasket from './shopping-basket';
import type { ShoppingBasketSignature } from './shopping-basket';

export interface InstrumentSelectorSignature {
    Element: ShoppingBasketSignature<Instrument>['Element'];
    Args: {
        selectedInstruments?: Instrument[];
        changeSelection: (instruments: Instrument[]) => void;
    };
}

export default class InstrumentSelector extends Component<InstrumentSelectorSignature> {
    get selectedInstruments(): Instrument[] {
        return this.args.selectedInstruments ?? [];
    }

    get availableInstruments(): Instrument[] {
        return Array.from(instrumentMap.keys()).filter(
            (instrument) => instrument !== Instrument.None && !this.selectedInstruments.includes(instrument)
        );
    }

    getInstrumentName = (instrument: Instrument): string => {
        return instrumentMap.get(instrument) ?? 'Unknown Instrument';
    };

    addInstrument = (instrument: Instrument): void => {
        const { selectedInstruments } = this;
        if (!selectedInstruments.includes(instrument)) {
            this.args.changeSelection([...selectedInstruments, instrument]);
        }
    };

    removeInstrument = (instrument: Instrument): void => {
        const { selectedInstruments } = this;
        if (selectedInstruments.includes(instrument)) {
            this.args.changeSelection(this.selectedInstruments.filter((selected) => selected !== instrument));
        }
    };

    moveInstrument = (instrument: Instrument, shift: -1 | 1): void => {
        const idx = this.selectedInstruments.indexOf(instrument);
        if (idx === -1) return;

        const newIdx = idx + shift;
        if (newIdx < 0 || newIdx >= this.selectedInstruments.length) return;

        const arr = [...this.selectedInstruments];
        arr.splice(idx, 1);
        arr.splice(newIdx, 0, instrument);
        this.args.changeSelection(arr);
    };

    clearAll = (): void => {
        this.args.changeSelection([]);
    };

    <template>
        <ShoppingBasket
            @allItems={{this.availableInstruments}}
            @selectedItems={{this.selectedInstruments}}
            @getItemLabel={{this.getInstrumentName}}
            @addItem={{this.addInstrument}}
            @removeItem={{this.removeInstrument}}
            @moveItem={{this.moveInstrument}}
            @clearAll={{this.clearAll}}
            class="instrument-selector"
            ...attributes
        />
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        InstrumentSelector: typeof InstrumentSelector;
    }
}
