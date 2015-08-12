var
  gulp       = require('gulp'),
  gutil      = require('gulp-util'),
  sass       = require('gulp-sass'),
  concat     = require('gulp-concat'),
  uglify     = require('gulp-uglify'),
  rename     = require('gulp-rename'),
  watch      = require('gulp-watch'),
  size       = require('gulp-size'),
  cssmin     = require('gulp-cssmin'),
  livereload = require('gulp-livereload'),
  connect    = require('gulp-connect'), // Servidor
  // fileinclude= require('gulp-file-include'),
  plumber    = require('gulp-plumber');

var pkg = require('./package.json');

// ------------------------------------
// Combine and compile SCSS / CSS
gulp.task('css', function(){
  gulp.src([
    // 'css/src/lib/normalize.3.0.0.css',
    'css/src/__variables.css.scss',
    'css/src/bourbon/bourbon-flex-grid.css.scss',
    'css/src/bourbon/bourbon-linear-gradient.css.scss',
    'css/src/__base.css.scss',
    'css/src/__mixins.css.scss',
    'css/src/_site_layout.css.scss',
  ])
  .pipe(plumber())
  .pipe(concat('application.bulk.scss'))
  .pipe(gulp.dest('css'))
  .pipe(sass())
  .pipe(rename('application.css'))
  .pipe(gulp.dest('css'))
  .pipe(size())
  // .pipe(cssmin())
  // .pipe(rename({suffix: '.min'}))
  // .pipe(gulp.dest('css'))
  // .pipe(size())
  .pipe(livereload());
});

// ------------------------------------
// Combine and compile JS
/*gulp.task('js', function(){
  gulp.src([
    'js/src/ready.js',
  ])
  .pipe(plumber())
  .pipe(concat('application.js'))
  .pipe(gulp.dest('js'))
  .pipe(size())
  .pipe(livereload());
});*/

// ------------------------------------
// Grunt fileincludes
/*gulp.task('includes', function() {
  gulp.src('./_sources/*')
    .pipe(fileinclude({
      prefix: '@@',
      basepath: '@file' //@file
    }))
    .pipe(gulp.dest('./'))
    .pipe(livereload());
});*/

// ------------------------------------
// Grunt connect webserver
gulp.task('connect', function() {
  connect.server({
    root: '',
    port: 8888,
    livereload: true
  });
});

gulp.task('html', function () {
  gulp.src('./*.html')
    .pipe(connect.reload());
});

// ------------------------------------
// Grunt watch
gulp.task('watch', function() {
  livereload.listen();
  gulp.watch(['./*.html'], ['html']);
  gulp.watch('./css/src/*', ['css']);
  // gulp.watch('./js/src/*', ['js']);
  // gulp.watch(['./_sources/*', './_includes/*'], ['includes']);
});


// ------------------------------------
// Default task code
gulp.task('default', ['watch','css','connect']); //,'includes'
