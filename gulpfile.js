function strictmode() {
    "use strict";
    return true;
}
var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function () {
  return gulp.src('app/scss/main.scss')
    .pipe(sass())
    .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
    .pipe(gulp.dest('app/css'));
});


gulp.task('default', function() {
  gulp.watch('app/scss/main.scss', ['sass']);
});
