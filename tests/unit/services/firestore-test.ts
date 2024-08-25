import { module, test } from 'qunit';
import { setupTest } from 'band-songs/tests/helpers';

module('Unit | Service | firestore', function (hooks) {
    setupTest(hooks);

    // TODO: Replace this with your real tests.
    test('it exists', function (assert) {
        const service = this.owner.lookup('service:firestore');
        assert.ok(service);
    });
});
