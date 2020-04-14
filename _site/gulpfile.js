var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var uglify  = require('gulp-uglify');
var cleanCSS    = require('gulp-clean-css');
var rename      = require('gulp-rename');



var sassPaths = [
  // 'node_modules/normalize.scss/sass',
  'node_modules/foundation-sites/scss',
  // 'node_modules/motion-ui/src'
];


var scripts = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/foundation-sites/dist/js/foundation.min.js',
  'node_modules/inline-svg/src/inlineSVG.js',
  // 'node_modules/instantsearch.js/dist/instantsearch.js',
  // 'node_modules/sticky-js/dist/sticky.compile.js',
  'assets/javascript/app.js',
  // 'assets/javascript/navigation.js',
]

var copyJs = [
  // 'assets/javascript/threejs-custom-r67.min.js',
  // 'assets/javascript/three.min.js',

]

gulp.task('sass', function() {
  return gulp.src('_sass/app.scss')
    .pipe($.sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('error', $.sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(cleanCSS())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('assets/css'));
});


gulp.task('javascript', ['copyJs'], function() {

  return gulp.src(scripts)
    // .pipe($.sourcemaps.init())
    .pipe($.concat('app.js'))
    // .pipe($.sourcemaps.write())
    .on('error', onError)
    // .pipe(gulp.dest('./assets/javascript'))
    .pipe(uglify())
    .pipe(rename('app.min.js'))
    .pipe(gulp.dest('./assets/javascript'))
    // .on('finish', browser.reload);
});

gulp.task('copyJs', function() {
  return gulp.src(copyJs)
    .pipe(gulp.dest('./assets/javascript'))
});

function onError(err) {
  console.log('ERROR')
  console.log(err);
  this.emit('end');
}

gulp.task('default', ['sass', 'javascript'], function() {
  gulp.watch(['_sass/**/*.scss'], ['sass']);
  gulp.watch(['assets/**/*.js'], ['javascript']);
});

// gulp.task('default', gulp.parallel('scss'));
// gulp.task('watch', gulp.parallel('scss'));