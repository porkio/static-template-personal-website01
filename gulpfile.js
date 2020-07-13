// 处理任务
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var pipeline = require('readable-stream').pipeline;
var sass = require('gulp-sass');
sass.compiler = require('node-sass');
var autoprefixer = require('gulp-autoprefixer');

/**
 * 常用方法
 *
 * gulp.task  -- 定义任务
 * gulp.src   -- 找到需要执行任务的文件
 * gulp.dest  -- 任务文件即将输出的位置
 * gulp.watch -- 监视文件是否发生变化
 */

// 定义任务
// 复制html文件
gulp.task('copyFile', () => {
    gulp.src('src/*.html').pipe(gulp.dest('dist'));
    gulp.src('src/images/*').pipe(gulp.dest('dist/images'));
});

gulp.task('compress', () => {
    return pipeline(
            gulp.src('src/js/*.js'),
            uglify(),
            gulp.dest('dist/js')
    );
});

gulp.task('sass', () => {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer())
        .pipe(gulp.dest('dist/css'))
});

// 运行gulp命令后，监测文件发生改变才执行对应的操作
gulp.task('default', gulp.series('sass', 'compress', 'copyFile', () => {
    gulp.watch('src/*.html', ['copyFile']);
    gulp.watch('src/images/*', ['copyFile']);
    gulp.watch('src/js/*.js', ['compress']);
    gulp.watch('src/scss/*.scss', ['sass']);
}));
