var gulp = require('gulp'),
    sass = require('gulp-sass'),
    scsslint = require('gulp-scss-lint'),
    autoprefixer = require('gulp-autoprefixer'),
    cached = require('gulp-cached');

var config = {
  paths: {
    sass: [
      './Resources/Private/Scss/**/*.scss',
      './Resources/Private/Scss/*.scss',
      '!./Resources/Private/Scss/Elements/font-awesome/**'
    ],
    scripts: [
        './node_modules/jquery/dist/jquery.min.js',
        './node_modules/jquery-flot/jquery.flot.js',
        './node_modules/jquery-flot/jquery.flot.selection.js'
    ]
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

gulp.task('js', function() {
    gulp.src(config.paths.scripts)
        .pipe(gulp.dest('./Resources/Public/JavaScript/'))
});

gulp.task('sass', ['lint'], function () {
  gulp.src(config.paths.sass)
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer(
          config.autoprefixer
      ))
      .pipe(gulp.dest('./Resources/Public/Css/'))
});

gulp.task('sassProd', function () {
  gulp.src(config.paths.sass)
      .pipe(sass({
        outputStyle: 'expanded'
      }))
      .pipe(autoprefixer(
          config.autoprefixer
      ))
      .pipe(gulp.dest('./Resources/Public/Css/'))
});

gulp.task('lint', function () {
  gulp.src(config.paths.sass)
      .pipe(cached('scsslint'))
      .pipe(scsslint({
        'config': 'Build/.scss-lint.yml'
      }))
});

gulp.task('build', function () {
  gulp.start('sassProd')
});

gulp.task('watch', function () {
  gulp.watch(config.paths.sass, ['sass'])
});

gulp.task('default', function () {
  gulp.start('lint', 'sass', 'js', 'watch')
});
