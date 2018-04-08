var gulp            = require('gulp'),
    sass            = require('gulp-sass'),
    browserSync     = require('browser-sync'),
    autoprefixer    = require('gulp-autoprefixer');


gulp.task('sass',function(){
    return gulp.src('sass/main.scss')
    .pipe(sass())
    .pipe(autoprefixer(['last 10 versions','> 1%','ie 8','ie 7'],{cascade:true}))
    .pipe(gulp.dest('css'))
    .pipe(browserSync.reload({stream:true}))
});


gulp.task('browser-sync',function(){
    browserSync({
        server:true
    })
    notify: false

});


gulp.task('watch',['browser-sync','sass'],function(){
    gulp.watch('sass/**/*.scss',['sass']);
    gulp.watch('*.html',browserSync.reload);
    gulp.watch('js/**/*.js',browserSync.reload);
});
