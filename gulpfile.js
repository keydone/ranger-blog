const gulp = require('gulp');
const del = require('del');
const scss = require('gulp-scss');
const concat = require('gulp-concat');
const cssnano = require('gulp-cssnano');
const uglify = require('gulp-uglify');

gulp.task('clean', () => del(['public/static/css', 'public/static/js']));

gulp.task('css', () => gulp.src('./src/scss/base.css')
    .pipe(scss())
    .pipe(cssnano())
    .pipe(gulp.dest('./public/static/css')));

gulp.task('postcss', () => gulp.src('./src/scss/post.scss')
    .pipe(scss())
    .pipe(cssnano())
    .pipe(gulp.dest('./public/static/css')));

gulp.task('jQuery', () => gulp.src('./src/js/jQuery.v3.3.1.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/static/js')));

gulp.task('commonjs', () => gulp.src('./src/js/common/*.js')
    .pipe(concat('common.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/static/js')));

gulp.task('lib', () => gulp.src(['./src/js/layout/*.js', './src/js/libs/*.js'])
    .pipe(concat('lib.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/static/js')));

gulp.task('post', () => gulp.src('./src/js/page/post.js')
    .pipe(concat('post.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/static/js')));

gulp.task('filepond', () => gulp.src('./src/js/page/filepond.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/static/js')));

gulp.task('md', () => gulp.src('./src/js/page/markdown-it.min.js')
    .pipe(uglify())
    .pipe(gulp.dest('./public/static/js')));

gulp.task('md-plugins', () => gulp.src('./src/js/markdown/*.js')
    .pipe(concat('md-plugins.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./public/static/js')));

gulp.task('default',
    gulp.series(
        'clean', 'css', 'postcss', 'jQuery', 'commonjs', 'lib', 'post', 'filepond', 'md', 'md-plugins'
    ));
