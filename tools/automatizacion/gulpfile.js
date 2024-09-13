const gulp = require('gulp');
const server = require('gulp-server-livereload');

gulp.task('build', (callback) => {
	console.log('build');
	setTimeout(callback, 1000);
});

gulp.task('serve', (callback) => {
	gulp.src('www').pipe(
		server({
			livereload: true,
			port: 3000,
			open: true,
		})
	);
});

gulp.task('default', gulp.series('build', 'serve'));
