const gulp = require('gulp');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');
const sass = require('gulp-saas');

gulp.task('uglify', () => {
    return gulp.src('scripts/**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('gulp-cssnano', () => {
    return gulp.src('scripts/**/*.css')
    .pipe(gulp-cssnano())
    .pipe(gulp.dest('build/css'));
});

gulp.task('sass', () => {
    return gulp.src('scripts /**/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('build/js'));
});

gulp.task('watch', ['browserSync', 'sass'], async function (){
    gulp.watch('app/scss/**/*.scss', ['sass']); 
    // Reloads the browser whenever HTML or JS files change
    gulp.watch('app/*.html', browserSync.reload); 
    gulp.watch('app/js/**/*.js', browserSync.reload); 
  });
