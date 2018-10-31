'use strict'

var gulp = require('gulp');
var clean = require('gulp-clean');
var sourcemaps = require('gulp-sourcemaps');
var sass = require('gulp-sass');
// var minify = require('gulp-uglify');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var autoprefixer = require("gulp-autoprefixer");
var browserSync = require('browser-sync').create();
var runSequence = require('run-sequence');
var gulpCopy = require('gulp-copy');
var rename = require('gulp-rename');
var jsMinify = require("gulp-js-minify");

gulp.task('clean', function(){
    return gulp.src('dist', {read: false})
        .pipe(clean());
})

gulp.task('default', ['dev'])

gulp.task('build', function (){
    runSequence('clean', ['sass', 'autoprefixer', 'copy', 'jsMinify', 'img'], function(){

        gulp.watch('./src/scss/*.scss',['sass', 'autoprefixer']).on('change', browserSync.reload);
        gulp.watch('./src/js/*.js',['jsMinify']).on('change', browserSync.reload);
        gulp.watch('./index.html').on('change', browserSync.reload)
        gulp.watch('./src/img', ['img']).on('change', browserSync.reload)
    })
})
gulp.task('dev', function (){
    runSequence('clean', ['sass', 'autoprefixer', 'copy', 'jsMinify', 'img'], function(){
        browserSync.init({
            server: "./"
        })

        gulp.watch('./src/scss/*.scss',['sass', 'autoprefixer']).on('change', browserSync.reload);
        gulp.watch('./src/js/*.js',['jsMinify']).on('change', browserSync.reload);
        gulp.watch('./index.html').on('change', browserSync.reload)
        gulp.watch('./src/img', ['img']).on('change', browserSync.reload)
    })
})
gulp.task('sass', function(){
    return gulp.src('./src/scss/main.scss')
        // .pipe(concat('styles.scss'))
        .pipe(sourcemaps.init())
        .pipe(sass())
        .pipe(sourcemaps.write())
        .pipe(rename('styles.css'))
        .pipe(gulp.dest('./dist/css'))
    
})

gulp.task('autoprefixer', () =>
    gulp.src('./dist/css/*')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);

gulp.task('jsMinify', function(){
    return gulp.src('./src/js/*.js')
        .pipe(concat('bundle.js'))
        .pipe(gulp.dest('./dist/js'))
        .pipe(jsMinify())
        .pipe(rename('bundle.min.js'))
        .pipe(gulp.dest('./dist/js'))
})

gulp.task('copy', function(){
    return gulp.src('./src/scss/*.css')
        .pipe(gulp.dest('./dist/css/'))

})

gulp.task('img', function(){
    return gulp.src('./src/img/*/*')
        .pipe(imagemin({
            interlaced: true,
            progressive: true,
            svgoPlugins: [{removeViewBox: false}]
        }))
        .pipe(gulp.dest('./dist/img'))
});
