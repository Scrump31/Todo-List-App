function strictmode() {
    "use strict";
    return true;
}
var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(gulp.dest('app/css'));
});


gulp.task('default', function() {
  gulp.watch('app/scss/main.scss', ['sass']);
});
