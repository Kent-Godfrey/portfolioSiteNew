let gulp = require('gulp');
let uglify = require('gulp-uglify');
let babel = require('gulp-babel');
let imagemin = require('gulp-imagemin');
let rename = require('gulp-rename');
let htmlreplace = require('gulp-html-replace');

gulp.task('minify', function() {
    gulp.src('app/js/*.js')
        .pipe(babel({
            presets: ['es2015']
        }))
        .pipe(uglify().on('error', function(e) {
            console.log(e);
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('dist/js'));
});

gulp.task('minifyImg', function() {
    return gulp.src('app/images/**/*.{jpg,jpeg,png,gif,svg}')
        .pipe(imagemin().on('error', function(e) {
            console.log(e);
        }))
        .pipe(gulp.dest('dist/images'));
});


gulp.task('migrateFiles', function() {
    gulp.src('app/*.html')
        .pipe(htmlreplace({
            'js': 'js/script.min.js'
        }))
        .pipe(gulp.dest('dist'));
    gulp.src('app/downloads/*')
        .pipe(gulp.dest('dist/downloads'));
});

gulp.task('migrateCss', function() {
    return gulp.src('app/*.css')
        .pipe(gulp.dest('dist'));
});