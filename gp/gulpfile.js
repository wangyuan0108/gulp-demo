var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});
// Static server
gulp.task('browser-sync', function() {
    var files = [
    './*.html',
    './css/*.css',
    './js/*.js'
    ];
    browserSync.init(files,{
        server: {
            baseDir: "./"
        }
    });
});
gulp.task('default',['browser-sync','sass','sass:watch']); //定义默认任务