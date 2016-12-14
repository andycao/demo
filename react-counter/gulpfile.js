var gulp = require('gulp');
var watch = require('gulp-watch');
var stylus = require('gulp-stylus');


gulp.task('stylus', function () {
  return gulp.src(__dirname + '/src/style/**/*.styl')
    .pipe(stylus({
      compress: false
    }))
    .pipe(gulp.dest(__dirname + '/src/style/css'));
});

gulp.task("watch", ['stylus'], function () {
  var watcher = gulp.watch(['src/style/**/*.styl'], ['stylus']);
  watcher.on('change', function(event) {
    console.log('updated');
  });
});
