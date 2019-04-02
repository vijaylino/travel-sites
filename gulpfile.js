var gulp = require('gulp');
var watch = require('gulp-watch');
var postcss = require('gulp-postcss');
var autoprefixer = require('autoprefixer');
var cssvars = require('postcss-simple-vars');
var nested = require('postcss-nested');
var cssImport = require('postcss-import');
var browserSync = require('browser-sync').create();

gulp.task('default', function(){
    console.log("Hooray - we successfully installed gulp");
});

gulp.task('html',function(){
    console.log("Html file manipluation");
});

gulp.task('css',function(){
    console.log("inside Preprocessor for CSS")
    gulp.src('./app/assets/styles/header.css')
    .pipe(postcss([cssImport,cssvars,nested,autoprefixer]))
    .pipe(gulp.dest('./app/temp/mystyle'));
});

gulp.task('watch',function(){

    browserSync.init({
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html',function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css',function(){
        gulp.start('cssInject');
    });
});

gulp.task('cssInject',['css'],function(){
    console.log("inside cssInject")
    return gulp.src('/app/temp/mystyle/header.css')
    .pipe(browserSync.stream());
});