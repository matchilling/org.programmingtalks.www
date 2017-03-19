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
    ghPages = require('gulp-gh-pages'),
    jade = require('gulp-jade'),
    minifyHtml = require('gulp-html-minifier'),
    moment = require('moment'),
    path = require('path'),
    prompt = require('prompt'),
    reload = browserSync.reload,
    rename = require('gulp-rename'),
    runSequence = require('run-sequence'),
    sass = require('gulp-sass'),
    source = require('vinyl-source-stream'),
    sourcemaps = require('gulp-sourcemaps'),
    YouTubeIntg = require('./lib/intg/youtube/index.js');

const CNAME = 'www.programmingtalks.org';
const DISTRIBUTION = 'dist';
const PACKAGE = require('./package.json');
const PATH = {
    js: ['./client/**/*.js'],
    template: ['./resources/views/**/*.jade'],
    scss: ['./resources/scss/*.scss'],
    json: ['./resources/talks/*.json']
};

let dist = function(subpath) {
    return !subpath ? DISTRIBUTION : path.join(DISTRIBUTION, subpath);
};

// Build then deploy to GitHub pages gh-pages branch
gulp.task('build-deploy-gh-pages', function(callback) {
    runSequence('dist', 'deploy-gh-pages', callback);
});

// Deploy to GitHub pages gh-pages branch
gulp.task('deploy-gh-pages', function() {
    return gulp.src(dist('**/*')).pipe(
        ghPages({
            remoteUrl: PACKAGE.repository.url,
            silent: false,
            branch: 'gh-pages'
        }));
});

gulp.task('default', ['dist', 'watch']);

gulp.task('dist', ['dist-api', 'dist-client-js', 'dist-css', 'dist-html'], function() {
    fs.writeFile(dist('CNAME'), CNAME, 'utf-8');
});

gulp.task('dist-api', function() {
    gulp.src('./resources/talks/*.json')
        .pipe(concatJson('talks.json'))
        .pipe(gulp.dest(dist('api')));
});

gulp.task('dist-client-js', function() {
    browserify({
            entries : './client/js/app.js',
            debug   : false
        })
        .transform(babelify)
        .bundle()
        .pipe(source('app.js'))
        .pipe(gulp.dest(dist('assets')));
});

gulp.task('dist-css', function() {
    gulp.src(PATH.scss)
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
        .pipe(gulp.dest(dist('assets/css')));
});

gulp.task('dist-html', ['dist-api'], function() {
    fs.readFile(dist('api/talks.json'), function read(err, data) {
        if (err) throw err;

        renderHtml(
            prepareTalks(JSON.parse(data))
        );
    });

    function prepareTalks(talks) {
        talks.forEach(function(talk, index) {
            talks[index].meta.duration = moment.duration(talks[index].meta.duration).humanize();
        });

        return talks;
    }

    function renderHtml(talks) {
        gulp.src('./resources/views/index.jade')
            .pipe(jade({
                locals: {
                    popularSpeaker: ["Alan Kay", "Richard Hamming", "Richard Stallman", "Steve Jobs", "\"Uncle Bob\" - Robert Cecil Martin"],
                    popularTags: ["Inspiring", "golang", "node.js", "Keynote", "Educational"],
                    talks: talks
                }
            }))
            .pipe(minifyHtml({
                collapseWhitespace: true
            }))
            .pipe(rename('index.html'))
            .pipe(gulp.dest(dist()));
    }
});

gulp.task('download-talk', function() {
    let intg = new YouTubeIntg(env.GOOGLE_SERVER_KEY),
        schema = {
          properties: {
            videoSourceRef: {
              description: 'Enter youtube video source reference',
              pattern: /^[a-zA-Z0-9\s\-\_]+$/,
              message: 'The video source reference must be only letters, numbers, underscores, or dashes',
              required: true
            }
          }
        };

      prompt.start();
      prompt.get(schema, function (err, result) {
        intg.getVideo(result.videoSourceRef, function(response) {
          fs.writeFile('./resources/talks/' + result.videoSourceRef + '.json', JSON.stringify(response, null, 4), 'utf-8', (err) => {
            if (err) throw err;
            console.info('Success: ' + result.videoSourceRef);
          });
        });
      });
});

gulp.task('watch', ['dist'], function() {
    browserSync.init({
        logConnections : true,
        logFileChanges : true,
        logLevel       : 'debug',
        server         : { baseDir: dist() }
    });

    gulp.watch(PATH.js, ['dist-client-js']).on('change', reload);
    gulp.watch(PATH.scss, ['dist-css']).on('change', reload);
    gulp.watch(PATH.template, ['dist-html']).on('change', reload);
    gulp.watch(PATH.json, ['dist-api', 'dist-html']).on('change', reload);
});
