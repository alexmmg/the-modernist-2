const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

const path = {
    scss: ''
};


function style() {
    return gulp.src(path.scss)
        .pipe(sass())
        .pipe(gulp.dest('./css'))
}

function watch() {
    gulp.watch('./scss/**/*.scss', style);
}

function defaultTask(cb){
cb();
}

exports.style = style;
exports.watch = watch;


exports.default = defaultTask;
