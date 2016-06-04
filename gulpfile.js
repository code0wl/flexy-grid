'use strict';

const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');

gulp.task('build', function () {
	return gulp.src('./src/flexy-grid.css')
		.pipe(autoprefixer({
			browsers: ['last 2 versions'],
			cascade: true
		}))
		.pipe(gulp.dest('dist'));
});
