var gulp = require('gulp'),
	sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    minifycss = require('gulp-minify-css'),
    rename = require('gulp-rename');

gulp.task('sass', function () {
	try {
	    gulp.src('./scss/*.scss')
    		.pipe(sass({ style: 'expanded' }))
		    .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1'))
	        .pipe(gulp.dest('./css'))
		    .pipe(rename({suffix: '.min'}))
		    .pipe(minifycss())
	        .pipe(gulp.dest('./css'));
	} catch (e) {
		console.error(e);
	}
});

gulp.task('watch', function() {
  gulp.watch('scss/*.scss', ['sass']);
});