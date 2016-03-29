var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var concat = require('gulp-concat');
var es = require('event-stream');

gulp.task('build', function () {
    return gulp.src('./app/scss/**/*.scss')
    .pipe(sourcemaps.init())
    .pipe(sass({outputStyle:'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./maps'))
    .pipe(gulp.dest('./dist/css'));
});

gulp.task('watch', function () {
    gulp.watch('./app/**', ['build']);
});