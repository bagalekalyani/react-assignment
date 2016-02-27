/**
 * Created by synerzip on 04/12/15.
 */

var gulp = require('gulp');
var livereload = require('gulp-livereload');
var nodemon = require('gulp-nodemon');
var gwebpack = require('gulp-webpack');
var guglify = require('gulp-uglify');
var rimraf = require('rimraf');
var concatCss = require('gulp-concat-css');
var srcPath = "src";
var modulesPath = "node_modules";
var distPath = "dist";
var serverMain = srcPath + "/server.js";

var webpack = function(watch) {
    var options;
    options = {
        watch: watch,
        cache: true,
        devtool: "source-map",
        output: {
            filename: "app.js",
            sourceMapFilename: "[file].map"
        },
        resolve: {
            extensions: ["", ".webpack.js", ".js"],
            modulesDirectories: [modulesPath]
        },
        module: {
            loaders: [
                {
                    test: [/\.js$/, /\.jsx$/],
                    exclude: [new RegExp(modulesPath)],
                    loader: "babel-loader?stage=1"
                },
                { test: /bootstrap\/js\//, loader: 'imports?jQuery=jquery' },
                { test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,   loader: "url?limit=10000&minetype=application/font-woff" },
                { test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=application/octet-stream" },
                { test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,    loader: "file" },
                { test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,    loader: "url?limit=10000&minetype=image/svg+xml" }
            ]
        }
    };
    return gulp.src(srcPath + "/app.js")
        .pipe(gwebpack(options))
       // .pipe(guglify({mangle: true}))
        .pipe(gulp.dest(distPath));
};

gulp.task('jsbundle', function() {
    return webpack(false);
});

gulp.task('jswatch', function() {
    return webpack(true);
});

gulp.task('style', function() {
    return gulp.src(srcPath + '/styles/*.css')
        .pipe(concatCss('styles.css'))
        .pipe(gulp.dest(distPath));
});

gulp.task('styleFontAwesome', function() {
    return gulp.src(modulesPath + '/font-awesome/css/font-awesome.css')
        .pipe(gulp.dest(distPath + '/css/'));
});

gulp.task('clear', function() {
    return rimraf.sync(distPath);
});

gulp.task('copy', function() {
    gulp.src(srcPath + "/images/**/*.*").pipe(gulp.dest(distPath + "/images"));
    gulp.src(srcPath + "/images/*.*").pipe(gulp.dest(distPath + "/images"));

    gulp.src(modulesPath + "/bootstrap/fonts/*.*").pipe(gulp.dest(distPath + "/fonts"));
    gulp.src(modulesPath + "/font-awesome/fonts/*.*").pipe(gulp.dest(distPath + "/fonts"));

    return gulp.src(srcPath + "/*.html").pipe(gulp.dest(distPath));
});

gulp.task('server', function() {
    return nodemon({
        script: serverMain,
        watch: [serverMain],
        execMap: {
            "js": "node --harmony"
        },
        env: {
            PORT: process.env.PORT || 3008
        }
    });
});

gulp.task('refresh', ['copy'], function() {
    livereload.listen();
    gulp.watch([distPath + "/**/*"]).on('change', livereload.changed);
    gulp.watch(['style']);
    return gulp.watch([srcPath + "/**/*.html"], ['copy']);
});

gulp.task('build', ['clear', 'copy', 'style', 'styleFontAwesome', 'jsbundle']);

gulp.task('default', ['clear', 'copy', 'style', 'styleFontAwesome', 'server', 'jswatch', 'refresh']);