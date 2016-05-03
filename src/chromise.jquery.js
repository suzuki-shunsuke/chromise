let $ = require('jquery'),
    Chromise = require('./Chromise');

module.exports = new Chromise($.Deferred.bind($), d => d.promise());
