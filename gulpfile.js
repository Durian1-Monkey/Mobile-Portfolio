    
var gulp = require('gulp'),
    imageop = require('gulp-image-optimization'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    jsmin = require('gulp-jsmin'),
    rename = require('gulp-rename'),
    htmlmin = require('gulp-htmlmin'),
    rename = require('gulp-rename'),
    imagemin = require('gulp-imagemin'),
    pngquant = require('imagemin-pngquant'),
    imageminJpegtran = require('imagemin-jpegtran'),
    imageminJpegoptim = require('imagemin-jpegoptim'),
    imageminJpegRecompress = require('imagemin-jpeg-recompress'),
    critical = require('critical').stream,
    imageResize = require('gulp-image-resize');

// Optimizes our image files and outputs them to build/image/*
gulp.task('Opt', function() {
    return gulp.src('./build/*.png')
                .pipe(imageop({
                    optimizationLevel: 5
                }))
				.pipe(rename({suffix: '.opt'}))
                .pipe(gulp.dest('./build/'));
});

// Compiles scss files and outputs them to build/css/*.css
gulp.task('styles', function(){
	return gulp.src('./build/*.css')
		.pipe(cssmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./build/'));

});

// Concats & minifies js files and outputs them to build/js/app.js 
gulp.task('scripts', function () {
	gulp.src('./build/*.js')
		.pipe(jsmin())
		.pipe(rename({suffix: '.min'}))
		.pipe(gulp.dest('./build/'));
});

// Minifies our HTML files and outputs them to build/*.html
gulp.task('html', function() {
  return gulp.src('./build/*.html')
    .pipe(htmlmin({collapseWhitespace: true}))
		.pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('./build/min/'))
});

gulp.task('default', () => {
    console.log("Helo"); //test code
});

 //Minify jpg and png files
gulp.task('jpgopt', function () {
    return gulp.src('./build/*.png')
        .pipe(imageminJpegoptim({progressive: true})())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/'));
});
// Compress images if necessarily after Minifinig
gulp.task('Compress', function () {
    return gulp.src('./build/*.png')
        .pipe(imageminJpegRecompress({loops: 3})())
        .pipe(rename({suffix: '.min'}))
        .pipe(gulp.dest('./build/compress/'));
});

// Generate & Inline Critical-path CSS
gulp.task('critical', function () {
    return gulp.src('./build/*.html')
        .pipe(critical({base: './build/', inline: true, css: ['./build/style.min.css', './build/bootstrap-grid.min.css']}))
        .pipe(rename({suffix: '.critical'}))
        .pipe(gulp.dest('./build/critical/'));
});

// Image resize
gulp.task('resize', function () {
  gulp.src('./build/*.png')
    .pipe(imageResize({ 
      width : 70,
      height : 70,
      crop : true,
      upscale : false
    }))
    .pipe(rename({suffix: '.resize'}))
    .pipe(gulp.dest('./build/'));
});
//gulp.task('default', ['Optime', 'styles', 'scripts', 'html', 'imgmin']);




