var gulp      = require('gulp');
var gutil     = require('gulp-util');
var uglify    = require('gulp-uglify');
var compass   = require('gulp-compass');
var minifyCSS = require('gulp-minify-css');
var imagemin  = require('gulp-tinypng');
var plumber   = require('gulp-plumber');
var watch     = require('gulp-watch');

//compass error
var onError = function (err) {  
  gutil.beep();
  console.log(err);
};

//minificando js
gulp.task('scripts', function(){
    return gulp  
        .src(['src/js/*.js'])
        .pipe(uglify())
        .pipe(gulp.dest('build/js'));
});

//COMPASS
gulp.task('compass', function(){
    gulp.src('./src/scss/*.scss')
        .pipe(plumber({
          errorHandler: onError
        }))
        .pipe(compass({
            css: 'src/css',
            sass: 'src/scss',
            image: 'src/img'
        }))
        .pipe(minifyCSS())
        .pipe(gulp.dest('build/css'));
});


//tinypng
gulp.task('tinypng', function () {
    gulp.src('src/image.png')
        .pipe(tingpng('A8jRVkt_xBCIAb6KcTGHay0t7mVG401_'))
        .pipe(gulp.dest('dist'));
});

//watch
gulp.task('watch', function(){


    //Scripts
    gulp.watch('src/js/**/*.js', function(event) {
        gutil.log('Minificando seu JS ......');
        gulp.run('scripts');
    });

    //Compass
    gulp.watch('src/scss/*.scss', function(event) {
        gutil.log('Compilando o seu compass ......');
        gulp.run('compass');
    });


    //imagemin
    gulp.watch('src/img/*.png', function(event){
         gutil.log('Tiny PNG minificando seus PNGs ......');
        gulp.run('tinypng');
    });

});