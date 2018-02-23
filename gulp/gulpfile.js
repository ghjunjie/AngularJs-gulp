var gulp = require('gulp'),
	uglify = require('gulp-uglify'),
	concat = require('gulp-concat'),
	minifyCss = require('gulp-minify-css'),
	rename = require('gulp-rename'),
	rev = require('gulp-rev'),
	revCollector = require('gulp-rev-collector'),
	runSequence = require('run-sequence'),
	revAppend = require('gulp-rev-append'),
	stripDebug = require('gulp-strip-debug'),
	ngAnnotate = require('gulp-ng-annotate'),
	ngmin = require('gulp-ngmin'),
	livereload = require('gulp-livereload'),
	fs = require('fs');

gulp.task('default', function() {
	runSequence(['js', 'lib', 'css', 'img', 'revAppend', 'tpl', 'fonts', 'theme']);
});

gulp.task('js', function() {
	gulp.src(["../js/*.js", "../js/**/*.js", "../js/**/**/*.js"])
		.pipe(concat("/main.js"))
		.pipe(ngAnnotate())
		.pipe(ngmin({dynamic: false}))
//		.pipe(uglify())
		.pipe(gulp.dest("../dist/js")).pipe(livereload());
});
gulp.task('lib', function() {
	gulp.src(["../lib/*.js", "../lib/**/*.js"])
		.pipe(concat("/libs.js"))
		.pipe(uglify())
		.pipe(gulp.dest("../dist/js")).pipe(livereload());
});
gulp.task('css', function() {
	gulp.src(["../css/*.css", "../css/**/*.css"])
		.pipe(concat("/css.css"))
		.pipe(revAppend())
		.pipe(gulp.dest("../dist/css")).pipe(livereload());
});
gulp.task('less', function() {
	gulp.src(["../less/*.less"])
		.pipe(less())
		.pipe(concat("/less.css"))
		.pipe(revAppend())
		.pipe(gulp.dest("../dist/css")).pipe(livereload());
});
gulp.task('img', function() {
	gulp.src(["../img/*.*", "../img/**/*.*"])
		.pipe(gulp.dest("../dist/img")).pipe(livereload());
});
gulp.task('html', function() {
	gulp.src(["./index.html"])
		.pipe(gulp.dest("../dist")).pipe(livereload());
});
gulp.task('revAppend', function() {
	gulp.src(["../dist/index.html"])
		.pipe(revAppend())
		.pipe(gulp.dest("../dist")).pipe(livereload());
});
gulp.task('tpl', function() {
	gulp.src(["../tpl/*.html", "../tpl/**/*.html"])
		.pipe(gulp.dest("../dist/tpl")).pipe(livereload());
});
gulp.task('fonts', function() {
	gulp.src(["../fonts/**"])
		.pipe(gulp.dest("../dist/fonts")).pipe(livereload());
})
gulp.task('theme', function() {
	gulp.src(["../theme/**"])
		.pipe(gulp.dest("../dist/theme")).pipe(livereload());
})
gulp.task('watch', function() {
	livereload.listen();
	gulp.watch([
		"../js/*.js",
		"../js/**/*.js",
		"../js/**/**/*.js",
		"../css/*.css",
		"../css/**/*.css",
		"../tpl/*.html",
		"../tpl/**/*.html",
		'./index.html'
	], ['js','css', 'tpl','revAppend']);
//	], ['js','css', 'html', 'tpl']);
});
gulp.task('watchall', function() {
	livereload.listen();
	gulp.watch([
		"../js/*.js",
		"../js/**/*.js",
		"../js/**/**/*.js",
		"../css/*.css",
		"../css/**/*.css",
		"../img/*.*", "../img/**/*.*",
		"../tpl/*.html",
		"../tpl/**/*.html",
		"../less/*.less",
		"../fonts/**",
		"../theme/**",
		'./index.html'
	], ['js','css', 'tpl','lib','img','revAppend','fonts','theme']);
//	], ['js','css', 'html', 'tpl']);
});