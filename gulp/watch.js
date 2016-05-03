/**
 * $ gulp watch.src
 * webpack.src
 *
 * $ gulp watch.dist
 * rsync
 *
 * $ gulp watch.test
 */


var gulp = require('gulp'),
    _ = require('underscore');

var configs = {
  'src': ['webpack.src'],
  'dist': ['rsync'],
  'test.real.storage': ['webpack.test.real.storage'],
  'test.mock.storage': ['webpack.test.mock.storage'],
};

_.each(configs, function(tasks, src) {
  gulp.task('watch.' + src, function() {
    gulp.watch('./' + src.replace(/\./g, '/') + '**/*.js', tasks);
  });
});

gulp.task(
  'watch',
  _.keys(configs).map(function(key) {
    return 'watch.' + key;
  })
);
