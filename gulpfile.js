var gulp = require('gulp');
var browserSync = require('browser-sync');

gulp.task('serve', function() {

    browserSync.init(["css/*.css", "js/**/*.js", "js/*.js", "*.html"],{
        server: {
        	baseDir:"./"
        }
    });

    gulp.watch("*.html").on('change', browserSync.reload);
});


gulp.task('default', ['serve']);