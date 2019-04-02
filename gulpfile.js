var gulp = require('gulp');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
var minifyCss = require('gulp-minify-css');
var browserSync = require('browser-sync').create();
var spritesmith = require('gulp.spritesmith');
 
var concat = require('gulp-concat');
var sourcemaps = require('gulp-sourcemaps');
 
// Compile sass
gulp.task('sass', function () {
  gulp.src('components/stylesheet/styles.scss')
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(sourcemaps.write())
    .pipe(concat('styles.css'))
    .pipe(gulp.dest('./css'))
    .pipe(browserSync.reload({
      stream: true
    }));
});

//Reload browser
gulp.task('sync', function() {
  browserSync.init({
    proxy: "skillswap.io",
    files: "*.php,components/scripts/*.js,components/stylesheet/**/*.scss"
  });
 });

//Generate sprite
gulp.task('sprite', function() {
  var spriteData = 
    gulp.src('images/sprite/*.*') // source path of the sprite images
    .pipe(spritesmith({
      retinaSrcFilter: ['images/sprite/*@2x.png'],
      imgName: 'sprite.png',
      retinaImgName: 'sprite@2x.png',
      cssName: 'sprite.css',
      algorithm: 'binary-tree',
      padding: 10,
    }));

  spriteData.img.pipe(gulp.dest('images')); // output path for the sprite
  spriteData.css.pipe(gulp.dest('components/stylesheet/base')); // output path for the CSS
});

// Uglify Javascripts
gulp.task('compress', function() {
  return gulp.src('components/scripts/*.js')
    .pipe(uglify())
    .pipe(gulp.dest('./js'));
});

// Watching files
gulp.task('watch', ['sync', 'sprite'], function() {
	gulp.watch("components/scripts/*.js", ['compress']);
	gulp.watch("components/stylesheet/**/*.scss", ['sass']);
	//gulp.watch("*.php").on('change',livereload());
});

// Uglify Plugins
gulp.task('uglifyPlugins', function() {
  return gulp.src(['components/libs/bootstrap/dist/js/bootstrap.js',
    'components/libs/jquery/dist/jquery.js',
    'components/libs/jquery-validation/dist/jquery.validate.js'])
    .pipe(rename({
      suffix: ".min",
      extname: ".js"
    }))
    .pipe(uglify())
    .pipe(gulp.dest('js'));
});

// Minify Plugins CSS files
gulp.task('minifyPlugins', function() {
  return gulp.src(['components/libs/bootstrap/dist/css/bootstrap.css'])
    .pipe(rename({
      suffix: ".min",
      extname: ".css"
    }))
    .pipe(minifyCss({compatibility: 'ie8'}))
    .pipe(gulp.dest('css'));
});

gulp.task('build', ['uglifyPlugins', 'minifyPlugins']);
gulp.task('default', ['watch']);