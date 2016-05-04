/**
 * $ gulp rsync.test.real.storage
 * ./dist => ./test/real/storage/chromise
 *
 * $ gulp rsync
 * ./dist => ./test/real/storage/chromise
 */


let gulp = require('gulp');
let rsync = require('gulp-rsync');

let tasks = [
  'test.real.storage',
  'test.mock.storage',
];

tasks.forEach(task => {
  gulp.task('rsync.' + task, () => {
    return gulp.src('./dist/**/*.js')
    .pipe(rsync({
      root: './dist',
      destination: './' + task.replace(/\./g, '/') + '/chromise',
      clean: true,
      recursive: true
    }));
  });
});

gulp.task('rsync', tasks.map(task => 'rsync.' + task));
