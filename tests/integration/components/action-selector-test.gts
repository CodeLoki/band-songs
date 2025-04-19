import { module, test } from 'qunit';
import { setupRenderingTest } from 'band-songs/tests/helpers';
import { render, click } from '@ember/test-helpers';
import { ActionMode, User } from 'band-songs/utils/songs';
import ActionSelector from 'band-songs/components/action-selector';

module('Integration | Component | action-selector', function (hooks) {
    setupRenderingTest(hooks);

    const css = '[data-test-action-selector]';

    function renderComponent(mode: ActionMode, user: User): Promise<void> {
        const fn = (): void => {};
        return render(<template><ActionSelector @mode={{mode}} @user={{user}} @changeMode={{fn}} /></template>);
    }

    test('it renders', async function (assert) {
        await renderComponent(ActionMode.Perform, User.Vocals);
        assert.dom(css).doesNotExist();

        await renderComponent(ActionMode.Perform, User.Me);
        assert.dom(css).exists();
        assert.dom(`${css} .euiButtonEmpty`).hasText('Perform');
        await click(`${css} .euiButtonEmpty`);
        assert.strictEqual(
            document.querySelectorAll('[data-test-combo-box-item]').length,
            3,
            'Three action options rendered'
        );
    });
});
