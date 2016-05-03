/**
 * $ gulp rsync.test.real.storage
 * ./dist => ./test/real/storage/chromise
 *
 * $ gulp rsync
 * ./dist => ./test/real/storage/chromise
 */


var gulp = require('gulp'),
    rsync = require('gulp-rsync');

var tasks = [
  'test.real.storage',
];

tasks.forEach(function(task) {
  gulp.task('rsync.' + task, function() {
    return gulp.src('./dist/**/*.js')
    .pipe(rsync({
      root: './dist',
      destination: './' + task.replace(/\./g, '/') + '/chromise',
      clean: true,
      recursive: true
    }));
  });
});

gulp.task(
  'rsync',
  tasks.map(function(task) {
    return 'rsync.' + task; 
  })
);
