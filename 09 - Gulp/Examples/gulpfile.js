const gulp = require('gulp'); //gulp
const uglify = require('gulp-uglify'); //uglify
const cleanCSS = require('gulp-clean-css'); 

gulp.task('uglify', () => {
    return gulp.src('js/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('minify-css' , () => {
    return gulp.src('styles/*.css')
    .pipe(cleanCSS())
    .pipe(gulp.dest('build/js'));
});
