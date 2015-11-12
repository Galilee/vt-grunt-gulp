'use strict';

var gulp = require('gulp');

var uglify = require('gulp-uglify');
//var concatCss = require('gulp-concat-css');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');

gulp.task('css', [], function() {
  return gulp.src(['web/static/css/*.css'])
    .pipe(concat('app.min.css'))
    .pipe(minifyCss())
    .pipe(gulp.dest('web/static/dist_gulp/css'));
});

gulp.task('js', [], function() {
  return gulp.src(['web/static/js/*.js'])
    .pipe(concat('app.min.js'))
    .pipe(uglify())
    .pipe(gulp.dest('web/static/dist_gulp/js'));
});

gulp.task('copy', [], function() {
  return gulp.src(['web/static/fonts/*.*'], { base: 'web/static/fonts' })
    .pipe(gulp.dest('web/static/dist_gulp/fonts'));
});

gulp.task('default', ['css', 'js', 'copy'], function() {
  console.log('All tasks are done now ! ');
});
