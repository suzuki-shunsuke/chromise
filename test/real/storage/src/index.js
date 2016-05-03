let mocha = require('mocha'),
    $ = require('jquery'),
    chai = require('chai');

$(() => {
  mocha.setup('tdd');
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

//  suite('chromise.tabs.create', () => {
//    test('normal', done => {
//      let url = 'http://example.org/';
//      chromise.tabs.create({url: url})
//      .then(tab => {
//        chai.assert.equal(tab.url, url);
//        done();
//      });
//    });
//  });

//  suite('chromise.tabs.get', () => {
//    test('normal', done => {
//      let tab1;
//      chromise.tabs.getCurrent()
//      .then(tab => {
//        console.log(tab.id);
//        tab1 = tab;
//        return chromise.tabs.get(tab.id);
//      }).then(tab => {
//        console.log(tab1.id);
//        console.log(tab.id);
//        chai.assert.equal(tab1.id, tab.id);
//        done();
//      });
//    });
//  });

  suite('chromise.tabs.getCurrent', () => {
    test('normal', done => {
      let url = 'http://example.org/';
      chromise.tabs.getCurrent()
      .then(tab => {
        // console.log(tab);
        // chai.assert.equal(tab.url, url);
        done();
      });
    });
  });

  suite('chromise.tabs.query', () => {
    test('normal', done => {
      let url = 'http://example.org/';
      chromise.tabs.query({active: true})
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
