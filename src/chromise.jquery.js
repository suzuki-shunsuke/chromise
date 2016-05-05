let $ = require('jquery'),
    Chromise = require('./base');

module.exports = new Chromise($.Deferred.bind($), d => d.promise());
