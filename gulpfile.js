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
      'safari 6',
      'ie 11',
      'opera 12.1',
      'ios 6',
      'android 4'
    ],
    cascade: true
  }
};

gulp.task('js', () => {
    gulp.src(config.paths.scripts)
        .pipe(concat('vendor.js'))
        .pipe(gulp.dest('./Resources/Public/JavaScript/'))
});

gulp.task('sass', () => {
  gulp.src(config.paths.sass)
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer(
          config.autoprefixer
      ))
      .pipe(gulp.dest('./Resources/Public/Css/'))
});

gulp.task('sassProd', () => {
  gulp.src(config.paths.sass)
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer(
          config.autoprefixer
      ))
      .pipe(gulp.dest('./Resources/Public/Css/'))
});

gulp.task('build', () => {
  gulp.start('sassProd')
});

gulp.task('watch', () => {
  gulp.watch(config.paths.sass, ['sass', 'sassProd', 'js'])
});

gulp.task('default', () => {
  gulp.start('sass', 'js', 'watch')
});
