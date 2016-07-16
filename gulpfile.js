'use strict';

let babelify = require('babelify'),
    browserify = require('browserify'),
    browserSync = require('browser-sync').create(),
    cleanCSS = require('gulp-clean-css'),
    concat = require('gulp-concat'),
    concatJson = require('gulp-concat-json'),
    env = require('dotenv').config(),
    fs = require('fs'),
    gulp = require('gulp'),
    jade = require('gulp-jade'),
    LineReader = require('linereader'),
    minifyHtml = require('gulp-html-minifier'),
    reload = browserSync.reload,
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    talks = require('./resources/api/talks.json'),
    YouTubeIntg = require('./lib/intg/youtube/index.js');

const LOCALS = {
    talks: talks
};

const PATHS = {
    scss: ['./resources/scss/*.scss']
};

gulp.task('default', ['build', 'copy', 'render', 'sass']);

gulp.task('bulk-download-talks', function() {
    let intg = new YouTubeIntg(env.GOOGLE_SERVER_KEY),
        lr = new LineReader('.resources/talk_ids.txt');

    lr.on('line', function(lineNumber, lineContent) {
        let videoId = lineContent.trim();
        let tmp_path = './resources/talks/' + videoId + '.json';

        intg.getVideo(videoId, function(response) {
            fs.writeFile(tmp_path, JSON.stringify(response), 'utf-8', function() {
                console.info('Success: ' + videoId);
            });
        });
    });
});

gulp.task('combine-talks', function() {
    gulp.src('./resources/talks/*.json')
        .pipe(concatJson('talks.json'))
        .pipe(gulp.dest('./resources/api'));
});

gulp.task('build', function() {
    browserify({
            entries: './client/js/app.js',
            debug: true
        })
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest('./dist/assets'));
});

gulp.task('copy', function() {
    gulp.src('./resources/api/*.json')
        .pipe(gulp.dest('./dist/api'));
});

gulp.task('render', function() {
    gulp.src('./resources/views/index.jade')
        .pipe(jade({
            locals: LOCALS
        }))
        .pipe(minifyHtml({
            collapseWhitespace: true
        }))
        .pipe(rename('index.html'))
        .pipe(gulp.dest('./dist'));
});

gulp.task('sass', function() {
    return gulp.src(PATHS.scss)
        .pipe(sourcemaps.init({
            loadMaps: false
        }))
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(concat('main.css'))
        .pipe(sourcemaps.write())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(rename({
            extname: '.min.css'
        }))
        .pipe(gulp.dest('./dist/assets/css'));
});

gulp.task('watch', function() {
    browserSync.init({
        server: {
            baseDir: './dist'
        }
    });

    gulp.watch('./client/**/*.js', ['build']).on('change', reload);
    gulp.watch('./resources/scss/**/*.scss', ['sass']).on('change', reload);
    gulp.watch('./resources/views/**/*.jade', ['render']).on('change', reload);
    gulp.watch('./resources/talks/*.json', ['combine-talks', 'copy', 'render']).on('change', reload);
});
