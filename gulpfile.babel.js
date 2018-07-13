import gulp from 'gulp'
import gulpLoadPlugins from 'gulp-load-plugins'
import browserify from 'browserify'
import source from 'vinyl-source-stream'
import rename from 'gulp-rename'

const $ = gulpLoadPlugins();
const src_es2015_file = 'Code.js';

gulp.task('test', () =>
  gulp.src(['test/**/*.js'], { read: false })
    .pipe($.mocha({ reporter: 'spec' }))
);

gulp.task('browserify', gulp.series('test', () =>
  browserify({
    entries: ['Code.js']
  }).transform('babelify')
    .plugin('gasify')
    .bundle()
    .pipe(source('Code.js'))
    .pipe(rename({
      extname: '.gs'
    }))
    .pipe(gulp.dest('.'))
));

gulp.task('watch', () =>
  gulp.watch(src_es2015_file, gulp.series('test', 'browserify'))
);