let m = require('mithril'),
    Chromise = require('./base');

module.exports = new Chromise(m.deferred.bind(m), d => d.promise);
