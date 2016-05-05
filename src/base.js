let createChromiseClass = require('./createChromiseClass');

module.exports = createChromiseClass({
  'storage': require('./api/storage'),
});
