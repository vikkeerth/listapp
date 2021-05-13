import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Service | current-d', function(hooks) {
  setupTest(hooks);

  // Replace this with your real tests.
  test('it exists', function(assert) {
    let service = this.owner.lookup('service:current-d');
    assert.ok(service);
  });
});
