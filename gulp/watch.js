/**
 * $ gulp watch.src
 * webpack.src
 *
 * $ gulp watch.dist
 * rsync
 *
 * $ gulp watch.test
 */


let gulp = require('gulp');
let _ = require('underscore');

let configs = {
  'src': ['webpack.src'],
  'dist': ['rsync'],
  'test.real.storage': ['webpack.test.real.storage'],
  'test.mock.storage': ['webpack.test.mock.storage'],
};

_.each(configs, (tasks, src) => {
  gulp.task('watch.' + src, () => {
    gulp.watch('./' + src.replace(/\./g, '/') + '**/*.js', tasks);
  });
});

gulp.task('watch', _.keys(configs).map(key => 'watch.' + key));
