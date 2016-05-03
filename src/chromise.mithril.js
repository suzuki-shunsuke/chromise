let m = require('mithril'),
    Chromise = require('./Chromise');

module.exports = new Chromise(m.deferred.bind(m), d => d.promise);
