var gulp = require('gulp'),
    mocha = require('gulp-mocha');

gulp.task('mocha', function() {
  return gulp.src('./test/mock/storage/dist/index.js', {read: false})
  .pipe(mocha({
    ui: 'tdd',
    reporter: 'spec'
  }));
});
