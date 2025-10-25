import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import EuiFlexGroup from '@ember-eui/core/components/eui-flex-group';
import EuiFlexItem from '@ember-eui/core/components/eui-flex-item';
import EuiPanel from '@ember-eui/core/components/eui-panel';
import EuiBadgeGroup from '@ember-eui/core/components/eui-badge-group';
import EuiBadge from '@ember-eui/core/components/eui-badge';
import EuiButtonIcon from '@ember-eui/core/components/eui-button-icon';
import EuiSpacer from '@ember-eui/core/components/eui-spacer';
import { fn } from '@ember/helper';
import { on } from '@ember/modifier';
import not from 'band-songs/helpers/not';

import type { EuiFlexGroupSignature } from '@ember-eui/core/components/eui-flex-group';

export interface ShoppingBasketSignature<T> {
    Element: EuiFlexGroupSignature['Element'];
    Args: {
        allItems: T[];
        selectedItems: T[];
        getItemLabel: (item: T) => string;
        addItem: (item: T) => void;
        removeItem: (item: T) => void;
        moveItem: (item: T, shift: -1 | 1) => void;
        clearAll: () => void;
    };
}

export default class ShoppingBasket<T> extends Component<ShoppingBasketSignature<T>> {
    @tracked selectedItem?: T;

    get enableArrowUp(): boolean {
        const { selectedItem } = this;
        return !!selectedItem && this.args.selectedItems.indexOf(selectedItem) > 0;
    }

    get enableArrowDown(): boolean {
        const { selectedItem } = this,
            { selectedItems } = this.args;
        return !!selectedItem && selectedItems.indexOf(selectedItem) < selectedItems.length - 1;
    }

    isItemSelected = (item: T, selectedItem?: T): boolean => {
        return selectedItem === item;
    };

    selectItem = (item: T): void => {
        this.selectedItem = this.selectedItem === item ? undefined : item;
    };

    moveItem = (shift: -1 | 1): void => {
        const { selectedItem } = this;
        if (selectedItem) {
            this.args.moveItem(selectedItem, shift);
        }
    };

    removeItem = (): void => {
        const { selectedItem } = this;
        if (selectedItem) {
            this.args.removeItem(selectedItem);
            this.selectedItem = undefined;
        }
    };

    <template>
        <EuiFlexGroup ...attributes>
            <EuiFlexItem>
                <EuiPanel @hasBorder={{true}}>
                    <EuiBadgeGroup @gutterSize="xs" as |Group|>
                        {{#each @allItems as |item|}}
                            <Group.item>
                                <EuiBadge @color="#666" @onClick={{fn @addItem item}}>
                                    {{@getItemLabel item}}
                                </EuiBadge>
                            </Group.item>
                        {{/each}}
                    </EuiBadgeGroup>
                </EuiPanel>
            </EuiFlexItem>
            <EuiFlexItem>
                <EuiPanel @paddingSize="s" @hasBorder={{true}}>
                    <EuiBadgeGroup @gutterSize="xs" as |Group|>
                        {{#each @selectedItems as |item|}}
                            <Group.item>
                                <EuiBadge
                                    @color={{if (this.isItemSelected item this.selectedItem) "primary" "hollow"}}
                                    @onClick={{fn this.selectItem item}}
                                >
                                    {{@getItemLabel item}}
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
                        {{on "click" (fn this.moveItem -1)}}
                    />
                    <EuiButtonIcon
                        @iconType="arrowDown"
                        @isDisabled={{not this.enableArrowDown}}
                        @size="m"
                        aria-label="Move down"
                        {{on "click" (fn this.moveItem 1)}}
                    />
                    <EuiButtonIcon
                        @iconType="cross"
                        @isDisabled={{not this.selectedItem}}
                        @size="m"
                        aria-label="Remove item"
                        {{on "click" this.removeItem}}
                    />
                    <EuiSpacer />
                    <EuiButtonIcon @iconType="trash" @size="m" aria-label="Clear all" {{on "click" @clearAll}} />
                </EuiFlexGroup>
            </EuiFlexItem>
        </EuiFlexGroup>
    </template>
}

declare module '@glint/environment-ember-loose/registry' {
    export default interface Registry {
        ShoppingBasket: typeof ShoppingBasket;
    }
}
