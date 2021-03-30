var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');
var uglify = require('gulp-uglify');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
const autoprefixer = require('gulp-autoprefixer');

sass.compiler = require('node-sass');

gulp.task('sass', function () {
   return gulp.src('app/scss/main.scss')
   .pipe(concat('style.scss'))
   .pipe(sass().on('error', sass.logError))
   .pipe(autoprefixer({
            cascade: false}))
   .pipe(gulp.dest('./dist/css/'));
});

gulp.task('browserify', function() {
 return browserify('app/js/app.js')
    .bundle()
    .pipe(source('script.js'))
    .pipe(gulp.dest('dist/js'));
});

gulp.task('sass:watch', function () {
   gulp.watch('app/scss/{,*/}*.scss', gulp.series('sass'));
   gulp.watch('app/js/{,*/}*.js', gulp.series('browserify'));
});

