var gulp        = require('gulp');
var browserSync = require('browser-sync').create();
var sass        = require('gulp-sass');
var stylus      = require('gulp-stylus');

gulp.task('sass', function () {
  return gulp.src('./sass/*.scss')
    .pipe(sass({outputStyle:'compact'}).on('error', sass.logError))
    .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('./sass/*.scss', ['sass']);
});
//stylus config
gulp.task('stylus', function () {
    return gulp.src('./stylus/*.styl')
        .pipe(stylus())
        .pipe(gulp.dest('./css'));
});

gulp.task('stylus:watch', function () {
    gulp.watch('./stylus/*.styl', ['stylus']);
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
gulp.task('default',['browser-sync','sass','sass:watch','stylus','stylus:watch']); //定义默认任务