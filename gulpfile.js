'use strict'

var gulp = require('gulp');
var minify = require('gulp-uglify');
var browserSync = require('browser-sync').create();
var sass = require('gulp-sass');
var clean = require('gulp-clean');
var concat = require('gulp-concat');
var imagemin = require('gulp-imagemin');
var jsMinify = require("gulp-js-minify");
var cleanCss = require("gulp-clean-css");
var autoprefixer = require("gulp-autoprefixer");