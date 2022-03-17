var gulp    = require('gulp');
var $       = require('gulp-load-plugins')();
var uglify  = require('gulp-uglify');
var cleanCSS    = require('gulp-clean-css');
var rename      = require('gulp-rename');
var sass = require('gulp-dart-sass');
var embedSvg = require('gulp-embed-svg');


var sassPaths = [
  // 'node_modules/normalize.scss/sass',
  'node_modules/foundation-sites/scss',
  // 'node_modules/motion-ui/src'
];


var scripts = [
  'node_modules/jquery/dist/jquery.js',
  'node_modules/foundation-sites/dist/js/foundation.min.js',
  // 'node_modules/instantsearch.js/dist/instantsearch.js',
  // 'node_modules/sticky-js/dist/sticky.compile.js',
  'assets/javascript/app.js',
  // 'assets/javascript/navigation.js',
]

gulp.task('sass', function() {
  return gulp.src('_sass/app.scss')
    .pipe(sass({
      includePaths: sassPaths,
      outputStyle: 'compressed' // if css compressed **file size**
    })
    .on('error', sass.logError))
    .pipe($.autoprefixer({
      browsers: ['last 2 versions', 'ie >= 9']
    }))
    .pipe(gulp.dest('assets/css'))
    .pipe(cleanCSS())
    .pipe(rename('app.min.css'))
    .pipe(gulp.dest('assets/css'));
});


gulp.task('javascript', function() {

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

gulp.task('embedSvgs', () =>
  gulp.src('_site/index.html')
    .pipe(embedSvg({
      root: '.'
    }))
    .pipe(gulp.dest('_site/')));

function onError(err) {
  console.log('ERROR')
  console.log(err);
  this.emit('end');
}

gulp.task('default', gulp.series('sass', 'javascript', function() {
  gulp.watch(['_sass/**/*.scss'], gulp.series('sass'));
  gulp.watch(['assets/**/*.js'], gulp.series('javascript'));
}));

// gulp.task('default', gulp.parallel('scss'));
// gulp.task('watch', gulp.parallel('scss'));
