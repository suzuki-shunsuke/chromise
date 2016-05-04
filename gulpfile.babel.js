let requireDir = require('require-dir');
let register = require('babel-register');

requireDir('./gulp', { recurse: true });
