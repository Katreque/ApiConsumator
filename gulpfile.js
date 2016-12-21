const gulp = require('gulp')
const cssmin = require('gulp-cssmin')
const del = require('del')
const uglify = require('gulp-uglify')
const htmlmin = require('gulp-htmlmin')
const imgmin = require('gulp-imagemin')
const runSequence = require('run-sequence')
const karma = require('karma');

gulp.task('build', () => {
    runSequence(
       'del',
       [
           'dep',
           'js',
           'css',
           'html',
           'img' 
       ]
    )
})

gulp.task('dep', () => {
    return gulp.src('app/bower_components/**')
               .pipe(gulp.dest('dist/bower_components'))
})

gulp.task('karma', (done) => {
    var karmaServer = new karma.Server({
        configFile: ('karma.conf.js').parseConfig,
        singleRun: true,
        browsers: ['Chrome'],
        frameworks: ['jasmine']
    }, function(exitCode){
        done();
        process.exit(exitCode);
    }).start();
});

gulp.task('css', () => {
    return gulp.src('app/styles/*.css')
               .pipe(cssmin()) 
               .pipe(gulp.dest('dist/styles'));
})

gulp.task('js', () => {
    return gulp.src('app/scripts/**/*.js')
            .pipe(uglify()) 
            .pipe(gulp.dest('dist/scripts'));
})

gulp.task('html', () => {
    return gulp.src('app/**/*.html')
            .pipe(htmlmin({collapseWhitespace: true, 
                            removeComments:true})) 
            .pipe(gulp.dest('dist'));
})

gulp.task('img', () => {
    return gulp.src('app/images/*.{png,jpg}')
            .pipe(imgmin()) 
            .pipe(gulp.dest('dist/images'));
})

gulp.task('del', () => {
    return del(['dist'])
})