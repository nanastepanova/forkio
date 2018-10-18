'use strict'

var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();
var sourcemaps = require('gulp-sourcemaps');
var runSequence = require('run-sequence');
var clean = require('gulp-clean');
var gulpCopy = require('gulp-copy')

gulp.task('clean', function(){
    return gulp.src('dist', {read: false})
        .pipe(clean());
})

gulp.task('serve', function (){
    runSequence('clean', ['sass', 'copy'], function(){
        browserSync.init({
            server: "./"
        })

        gulp.watch('./src/scss/*.scss',['sass']).on('change', browserSync.reload);
        gulp.watch('./index.html').on('change', browserSync.reload)
    })
})
gulp.task('sass', function(){
    return gulp.src('./src/scss/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(gulp.dest('./dist/css'))
})

gulp.task('copy', function(){
    return gulp.src('./src/scss/*.css')
        .pipe(gulp.dest('./dist/css/'))

})

gulp.task('default', ['serve'], function(){
    console.log('=== ALL DONE ===')
})