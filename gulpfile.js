var gulp = require('gulp');
var hologram = require('gulp-hologram');
var copy = require('gulp-copy');
var sync    = require('run-sequence');

/*
map of paths for using with the tasks below
 */
var paths = {
  copyFiles: ['app/assets/images/**/*', 'app/index.html']
};

gulp.task('copyimages', function() {
  return gulp.src(paths.copyFiles)
    .pipe(gulp.dest('dist/images'));
});

gulp.task('copyindex', function() {
  return gulp.src('app/index.html')
    .pipe(gulp.dest('dist'));
});

gulp.task('copy', ['copyindex', 'copyimages']);

gulp.task('hologram', function() {
        gulp.src('hologram_config.yml')
                .pipe(hologram({logging:true}));
});


gulp.task('default', function() {
  sync('copy');
});
