#Udacity Project4: Website Optimization
This is part of the Front-end Web Developer nanodegree from udacity. The project utilizes <a href="https://www.udacity.com/courses/ud884">Website Performance optimization</a> and <a href="https://www.udacity.com/courses/ud860">Browser Rendering Optimization</a>

##Usage
Access [index.html file](https://cdn.rawgit.com/Durian1-Monkey/frontend-nanodegree-mobile-portfolio/master/dist/index.html)

##Purpose
Optimize a provided website with a number of optimizaation- and performance- related issues so that it achieves a target PageSpeed score and runs at 60 frames per seconsd.

##optimizations
###Portfolio page

1. Minify images both JPEG and PNG using 

<a href="https://www.npmjs.com/package/gulp-image-optimization">gulp-image-optimization</a>, <a href="https://www.npmjs.com/package/gulp-imagemin">gulpimagemin</a>, <a href="https://www.npmjs.com/package/imagemin-jpegoptim">imagemin-jpegoptim</a> and <a href="https://www.npmjs.com/package/gulp-image-resize">gulp-image-resize</a>.
1. Minify CSS files both style.css and print.css using <a href="https://www.npmjs.com/package/gulp-cssmin">gulp-cssmin</a>.
1.Inline <a href="https://www.google.com/fonts">Google fonts</a>
1.Remove scripts fomr CRP by inserting async inside.
1. Inline CSS files into index.html using <a href="https://github.com/addyosmani/critical">critical</a>.

###Pizzeria page
1. Replace querySelectorAll into more specific selectors such as getElementById, getElementByClassName.
1. Eliminate redundant action to change pizza size with slider.
1. Improve scroll action speed in updatePositions function.
1. Reduce the number of rendering pizza 200.

##Gulp plugins
1. Image Optimization: gulp-image-optimization, gulpimagemin,imagemin-jpegoptim and gulp-image-resize.
1. Minify CSS: gulp-cssmin.
1. Inline CSS into HTML: Critical plugin.
1. Rename files after taking actions: gulp-rename.

##Style Guide
[Here](http://udacity.github.io/frontend-nanodegree-styleguide/index.html) is the Udacity style guide that I followed.
