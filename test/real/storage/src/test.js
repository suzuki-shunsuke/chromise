let mocha = require('mocha'),
    $ = require('jquery'),
    chai = require('chai');

$(() => {
  mocha.setup('bdd');

  describe('chrome.storage.local', () => {
    describe('chrome.storage.local.get', () => {
      describe('', () => {
        before(done => {
          chromise.storage.local.clear().then(() => {
            done();
          });
        });
        after(done => {
          chromise.storage.local.clear().then(() => {
            done();
          });
        });
        beforeEach(done => {
          chromise.storage.local.clear().then(() => {
            done();
          });
        });
        afterEach(done => {
          chromise.storage.local.clear().then(() => {
            done();
          });
        });
        it('storage.get', done => {
          chromise.storage.local.get('a').then(items => {
            chai.expect(items).to.eql({});
            done();
          }); 
        });
        it('storage.set', done => {
          chromise.storage.local.set({'a': 'a'}).then(()=> {
            return chromise.storage.local.get('a');
          }).then(items => {
            chai.expect(items).to.eql({'a': 'a'});
            done();
          }); 
        });
        it('storage.clear', done => {
          chromise.storage.local.set({'a': 'a'}).then(()=> {
            return chromise.storage.local.clear();
          }).then(() => {
            return chromise.storage.local.get('a');
          }).then(items => {
            chai.expect(items).to.eql({});
            done();
          }); 
        });
      });
    });
  });

  mocha.run();
});

