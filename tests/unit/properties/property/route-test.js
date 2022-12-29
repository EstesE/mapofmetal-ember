import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | properties/property', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:properties/property');
    assert.ok(route);
  });
});
