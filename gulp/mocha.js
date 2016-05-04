let gulp = require('gulp');
let mocha = require('gulp-mocha');

gulp.task('mocha', () => {
  return gulp.src('./test/mock/storage/dist/index.js', {read: false})
  .pipe(mocha({ui: 'tdd', reporter: 'spec'}));
});
