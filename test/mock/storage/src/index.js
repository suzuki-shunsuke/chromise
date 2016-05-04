let chai = require('chai'),
    $ = require('jquery'),
    mocha = require('mocha'),
    chrome = require('sinon-chrome');

$(() => {
  mocha.setup('bdd');

  describe('chrome.storage.local', () => {
    describe('chrome.storage.local.get', () => {
      describe('', () => {
        before(() => {
          chrome.storage.local.get.yields({});
        });
        it('', () => {
          chromise.storage.local.get('foo').then(items => {
            chai.expect(items).to.eql({});
          }); 
        });
      });
    });
  });

  mocha.run();
});
