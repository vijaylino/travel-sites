var gulp = require('gulp');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');



gulp.task('css',function(){
     gulp.src('./app/assets/styles/header.css')
    .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
    .on('error', function(error){
        this.emit('end');
    })
    .pipe(gulp.dest('./app/temp/mystyle'));
});

