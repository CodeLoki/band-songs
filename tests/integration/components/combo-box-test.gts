import { module, test } from 'qunit';
import { setupRenderingTest } from 'band-songs/tests/helpers';
import { render, click } from '@ember/test-helpers';
import ComboBox from 'band-songs/components/combo-box';

module('Integration | Component | combo-box', function (hooks) {
    setupRenderingTest(hooks);

    test('it renders', async function (assert) {
        let selectedValue = -1;

        const options = Array.from({ length: 3 }, (_, i) => ({
                value: i,
                text: `Option ${i}`
            })),
            selectedOption = options[1]!,
            fn = (v: number): void => {
                selectedValue = v;
            };

        await render(
            <template>
                <ComboBox @options={{options}} @selectedOption={{selectedOption}} @changeSelection={{fn}} />
            </template>
        );

        const cssComboBox = '[data-test-combo-box-btn]',
            cssComboBoxMenu = '[data-test-combo-box-menu]';

        assert.dom(cssComboBox).hasText('Option 1');
        await click(cssComboBox);

        assert.ok(document.querySelectorAll(cssComboBoxMenu), 'Combo box menu rendered');

        await click(document.querySelector(`${cssComboBoxMenu} .euiFlexItem:last-of-type button`)!);

        assert.notOk(document.querySelector(cssComboBoxMenu), 'Menu closed');

        assert.strictEqual(selectedValue, 2, 'Selected value updated');
    });
});
