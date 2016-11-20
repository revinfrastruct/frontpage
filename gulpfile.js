var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');


gulp.task('default', function() {
    // place code for your default task here
});

// Static server
gulp.task('serve', ['sass'], function() {
    browserSync.init({
        server: "./dist"
    });

    gulp.watch("source/scss/*.scss", ['sass']);
    gulp.watch("source/*.html").on('change', browserSync.reload);
});

gulp.task('sass', function() {
    return gulp.src("source/style/*.scss")
        .pipe(sass())
        .pipe(gulp.dest("dist/css"))
        .pipe(browserSync.stream());
});

gulp.task('default', ['serve']);
