var gulp = require('gulp'),
		sass = require('gulp-sass'),
		scsslint = require('gulp-scss-lint'),
		concat = require('gulp-concat'),
		uglify = require('gulp-uglify'),
		rename = require('gulp-rename'),
		autoprefixer = require('gulp-autoprefixer'),
		cached = require('gulp-cached');

var config = {
	paths: {
		sass: [
			'./Resources/Private/Scss/**/*.scss',
			'./Resources/Private/Scss/*.scss'
		]
	},
	autoprefixer: {
		browsers: [
			'last 2 versions',
			'safari 6',
			'ie 9',
			'opera 12.1',
			'ios 6',
			'android 4'
		],
		cascade: true
	}
};

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
			'config': 'Build/.scss-lint.yml',
			'maxBuffer': 9999999
		}))
});

gulp.task('build', function () {
	gulp.start('sassProd')
});

gulp.task('watch', function () {
	gulp.watch(config.paths.sass, ['build'])
});

gulp.task('default', function () {
	gulp.start('lint', 'build', 'watch')
});
