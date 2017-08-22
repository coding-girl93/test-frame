var gulp = require('gulp');
var uglify = require('gulp-uglify');
var rename = require("gulp-rename");
var webpack = require("webpack");

gulp.task('build', function () {
    gulp.src('src/index.js')
        .pipe(gulp.dest("build/static/"))
        .pipe(uglify())
        .pipe(rename(function (path) {
            path.basename += ".min";
        }))
        .pipe(gulp.dest("build/static/"))
})

gulp.task('watch', function () {
    gulp.watch(['./src/**/*'], ['build'])
});