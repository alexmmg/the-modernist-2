const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync');

// const path = {
//     scss: './scss/style.scss',
//     css: './app/css/style.css'
// };


function style() {
    return gulp.src('./scss/**/*.scss')
        .pipe(sass())
        .pipe(gulp.dest('./app/css/'))
}

function watch() {
    gulp.watch('./scss/**/*.scss', style);
}

// function defaultTask(cb) {
//     cb();
// }

exports.style = style;
exports.watch = watch;
// exports.default = defaultTask;
