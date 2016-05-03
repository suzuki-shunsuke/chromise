let mocha = require('mocha');


$(() => {
  mocha.setup('tdd');
  suite('chromise.jquery.storage.local', () => {
    test('normal', done => chromise.jquery.storage.local.clear()
      .then(() => chromise.jquery.storage.local.get(null))
      .then(items => {
        chai.assert.ok(_.isEqual(items, {}), '');
        return chromise.jquery.storage.local.set({ name: 'John'});
      }).then(() => chromise.jquery.storage.local.get('name'))
      .then(items => {
        chai.assert.ok(_.isEqual(items, { name: 'John'}), '');
        return chromise.jquery.storage.local.set({age: 19});
      }).then(() => chromise.jquery.storage.local.get(['name', 'age']))
      .then(items => {
        chai.assert.ok(_.isEqual(items, {name: 'John', age: 19}), '');
        return chromise.jquery.storage.local.remove('name');
      }).then(() => chromise.jquery.storage.local.get(['name', 'age']))
      .then(items => {
        chai.assert.ok(_.isEqual(items, {age: 19}), '');
        return chromise.jquery.storage.local.clear();
      }).then(() => chromise.jquery.storage.local.get(null))
      .then(items => {
        chai.assert.ok(_.isEqual(items, {}), '');
        return $.Deferred().resolve().promise();
      }).then(done)
    );
  });

  suite('chromise.jquery.storage.sync', () => {
    test('normal', (done) => chromise.jquery.storage.sync.clear()
      .then(() => chromise.jquery.storage.sync.get(null))
      .then(items => {
        chai.assert.ok(_.isEqual(items, {}), '');
        return chromise.jquery.storage.sync.set({ name: 'John'});
      }).then(() => chromise.jquery.storage.sync.get('name'))
      .then(items => {
        chai.assert.ok(_.isEqual(items, { name: 'John'}), '');
        return chromise.jquery.storage.sync.set({age: 19});
      }).then(() => chromise.jquery.storage.sync.get(['name', 'age']))
      .then(items => {
        chai.assert.ok(_.isEqual(items, {name: 'John', age: 19}), '');
        return chromise.jquery.storage.sync.remove('name');
      }).then(() => chromise.jquery.storage.sync.get(['name', 'age']))
      .then(items => {
        chai.assert.ok(_.isEqual(items, {age: 19}), '');
        return chromise.jquery.storage.sync.clear();
      }).then(() => chromise.jquery.storage.sync.get(null))
      .then(items => {
        chai.assert.ok(_.isEqual(items, {}), '');
        return $.Deferred().resolve().promise();
      }).then(done)
    );
  });

//  suite('chromise.jquery.tabs.create', () => {
//    test('normal', done => {
//      let url = 'http://example.org/';
//      chromise.jquery.tabs.create({url: url})
//      .then(tab => {
//        chai.assert.equal(tab.url, url);
//        done();
//      });
//    });
//  });

//  suite('chromise.jquery.tabs.get', () => {
//    test('normal', done => {
//      let tab1;
//      chromise.jquery.tabs.getCurrent()
//      .then(tab => {
//        console.log(tab.id);
//        tab1 = tab;
//        return chromise.jquery.tabs.get(tab.id);
//      }).then(tab => {
//        console.log(tab1.id);
//        console.log(tab.id);
//        chai.assert.equal(tab1.id, tab.id);
//        done();
//      });
//    });
//  });

  suite('chromise.jquery.tabs.getCurrent', () => {
    test('normal', done => {
      let url = 'http://example.org/';
      chromise.jquery.tabs.getCurrent()
      .then(tab => {
        // console.log(tab);
        // chai.assert.equal(tab.url, url);
        done();
      });
    });
  });

  suite('chromise.jquery.tabs.query', () => {
    test('normal', done => {
      let url = 'http://example.org/';
      chromise.jquery.tabs.query({active: true})
      .then(tabs => {
        let tab = tabs[0];
        // console.log(tabs);
        // chai.assert.equal(tab.url, url);
        done();
      });
    });
  });
  mocha.run();
});
