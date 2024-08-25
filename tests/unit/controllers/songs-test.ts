import { module, test } from 'qunit';
import { setupTest } from 'band-songs/tests/helpers';

module('Unit | Controller | songs', function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        const controller = this.owner.lookup('controller:songs');
        assert.ok(controller);
    });
});
