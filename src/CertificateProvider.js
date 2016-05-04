let Api = require('./Api');
let chrome = require('sinon-chrome');


class CertificateProvider extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.certificateProvider,
      [], ['onCertificatesRequested', 'onSignDigestRequested']
    );
  }
}


module.exports = CertificateProvider;
