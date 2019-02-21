const gulp = require('gulp')
const sass = require('gulp-sass')
const browserSync = require('browser-sync')

function style() {
  return gulp.src('./scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./'))
    .pipe(browserSync.stream())
}

function watch() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
  gulp.watch('./scss/**/*.scss', style)
  gulp.watch('./*.html', browserSync.reload)
  gulp.watch('./*.js', browserSync.reload)
}

exports.style = style
exports.watch = watch