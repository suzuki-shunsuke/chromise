let Api = require('./Api');
let chrome = require('sinon-chrome');


class DesktopCapture extends Api {
  constructor(deferred, promise) {
    super(
      deferred, promise, chrome.desktopCapture,
      ['chooseDesktopMedia'], []
    );
  }
}


module.exports = DesktopCapture;
