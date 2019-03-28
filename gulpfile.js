var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');

gulp.task('default', function(){
    console.log("Hooray - we successfully installed gulp");
});

gulp.task('html',function(){
    console.log("Html file manipluation");
});

gulp.task('css',function(){
    gulp.src('./app/assets/styles/header.css')
    .pipe(postcss([autoprefixer]))
    .pipe(gulp.dest('./app/temp/mystyle'));
})

gulp.task('watch',function(){

    watch('./app/index.html',function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css',function(){
        gulp.start('css');
    });
});