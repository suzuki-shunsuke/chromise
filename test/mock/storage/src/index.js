let chai = require('chai'),
    chromise = require('../../../../src/chromise.jquery'),
    $ = require('jquery'),
    chrome = require('sinon-chrome');

suite('chromise.storage.local', () => {
  test('normal', done => chromise.storage.local.clear()
    .then(() => chromise.storage.local.get(null))
    .then(items => {
      chai.assert.ok(_.isEqual(items, {}), '');
      return chromise.storage.local.set({ name: 'John'});
    }).then(() => chromise.storage.local.get('name'))
    .then(items => {
      chai.assert.ok(_.isEqual(items, { name: 'John'}), '');
      return chromise.storage.local.set({age: 19});
    }).then(() => chromise.storage.local.get(['name', 'age']))
    .then(items => {
      chai.assert.ok(_.isEqual(items, {name: 'John', age: 19}), '');
      return chromise.storage.local.remove('name');
    }).then(() => chromise.storage.local.get(['name', 'age']))
    .then(items => {
      chai.assert.ok(_.isEqual(items, {age: 19}), '');
      return chromise.storage.local.clear();
    }).then(() => chromise.storage.local.get(null))
    .then(items => {
      chai.assert.ok(_.isEqual(items, {}), '');
      return $.Deferred().resolve().promise();
    }).then(done)
  );
});

suite('chromise.storage.sync', () => {
  test('normal', (done) => chromise.storage.sync.clear()
    .then(() => chromise.storage.sync.get(null))
    .then(items => {
      chai.assert.ok(_.isEqual(items, {}), '');
      return chromise.storage.sync.set({ name: 'John'});
    }).then(() => chromise.storage.sync.get('name'))
    .then(items => {
      chai.assert.ok(_.isEqual(items, { name: 'John'}), '');
      return chromise.storage.sync.set({age: 19});
    }).then(() => chromise.storage.sync.get(['name', 'age']))
    .then(items => {
      chai.assert.ok(_.isEqual(items, {name: 'John', age: 19}), '');
      return chromise.storage.sync.remove('name');
    }).then(() => chromise.storage.sync.get(['name', 'age']))
    .then(items => {
      chai.assert.ok(_.isEqual(items, {age: 19}), '');
      return chromise.storage.sync.clear();
    }).then(() => chromise.storage.sync.get(null))
    .then(items => {
      chai.assert.ok(_.isEqual(items, {}), '');
      return $.Deferred().resolve().promise();
    }).then(done)
  );
});
