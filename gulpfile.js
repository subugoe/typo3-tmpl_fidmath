const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    concat = require('gulp-concat');

const config = {
  paths: {
    sass: [
      './Resources/Private/Scss/**/*.scss',
      './Resources/Private/Scss/*.scss',
      '!./Resources/Private/Scss/Elements/font-awesome/**'
    ],
    scripts: [
      './node_modules/jquery/dist/jquery.min.js',
      './node_modules/jquery-flot/jquery.flot.js',
      './node_modules/jquery-flot/jquery.flot.selection.js',
      './node_modules/popper.js/dist/umd/popper.js',
      './node_modules/bootstrap/js/dist/util.js',
      './node_modules/bootstrap/js/dist/collapse.js',
      './node_modules/bootstrap/js/dist/dropdown.js',
    ],
  },
  autoprefixer: {
    browsers: [
      'last 2 versions',
      'ie 11',
      'opera 12.1',
      'ios 9',
      'android 4'
    ],
    cascade: true
  }
};

const js = () => {
  return gulp.src(config.paths.scripts)
      .pipe(concat('vendor.js'))
      .pipe(gulp.dest('./Resources/Public/JavaScript/'))
};

const sassTask = () => {
  return gulp.src(config.paths.sass)
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer(
          config.autoprefixer
      ))
      .pipe(gulp.dest('./Resources/Public/Css/'))
};

const sassProd = () => {
  return gulp.src(config.paths.sass)
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer(
          config.autoprefixer
      ))
      .pipe(gulp.dest('./Resources/Public/Css/'))
};

gulp.task('build', gulp.parallel([sassProd]));

const watch = () => {
  return gulp.watch(config.paths.sass, gulp.series([sassTask, sassProd, js]));
};

gulp.task('watch', gulp.series([watch]));

gulp.task('default', gulp.series([sassTask, js, watch]));
