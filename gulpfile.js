const gulp = require('gulp');
//css压缩
const cssmin = require('gulp-cssmin');
const autoprefixer = require('gulp-autoprefixer');
const cssHandler=()=>{
    return gulp.src('./src/css/*.css')
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
// module.exports.css = cssHandler;
//js压缩
const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const jsHandler=()=>{
    return gulp.src('./src/js/*.js')
    .pipe(babel({
        presets:['@babel/env']
    }))
    .pipe(uglify())
    .pipe(gulp.dest('./dist/js'))
}
// module.exports.js = jsHandler;
//html压缩
const htmlmin = require('gulp-htmlmin')
const htmlHandler=()=>{
    return gulp.src(['./src/*.html','./src/*.htm'])
    .pipe(htmlmin({
        "removeAttributeQuotes":true,     //移除属性上的双引号
        "removeComments":true,            //移除html注释
        "collapseBooleanAttributes":true, //把值为布尔值的属性简写
        "collapseWhitespace":true,        //移除所有空格，变成一行代码
        "minifyCSS":true,                 //把页面里面的style标签里面的css样式也去空格
        "minifyJS":true,                  //把页面里面的script标签里面的js代码也去空格
    }))
    .pipe(gulp.dest('./dist'))
}
// module.exports.html =htmlHandler;
//图片转移
const imgHandler =()=>{
    return gulp.src('./src/images/**')
    .pipe(gulp.dest('./dist/images'))
}
// module.exports.img =imgHandler;
//移动lib文件夹
const libHandler = ()=>{
    return gulp.src('./src/lib/**')
    .pipe(gulp.dest('./dist/lib'))
}
// module.exports.lib = libHandler;
//del删除目录
const del =require('del');
const delHandler = ()=>{
    return del(['./dist'])
}
// module.exports.del = delHandler;
//开启服务器
const webserver =require('gulp-webserver');
const serverHandler = ()=>{
    return gulp.src('./dist') //找到我要打开网页的文件夹,把这个文件夹当做网站根目录
    .pipe(webserver({
        port:'8080', //端口号,0-65535,尽量不使用0-1023
        open:'./pages/index.html', //你默认打开的首页,从dist下面根目录开始书写
        livereload:true, //自动刷新浏览器,热重启
        proxies:[
            {
                source:"/weather",
                target:'https://way.jd.com/jisuapi/weather',
            }
        ]
    }))
}
//sass转css在压缩
const sass = require('gulp-sass');
const sassHandler = ()=>{
    return gulp.src('./src/css/*.scss')
    .pipe(sass())
    .pipe(autoprefixer())
    .pipe(cssmin())
    .pipe(gulp.dest('./dist/css'))
}
// module.exports.sass = sassHandler;
//watch监视
const watchHandler = ()=>{
    gulp.watch('./src/css/*.css',cssHandler);
    gulp.watch('./src/js/*.js',jsHandler);
    gulp.watch('./src/pages/*.html',htmlHandler);
    gulp.watch('./src/images/**',imgHandler);
    gulp.watch('./src/lib/**',libHandler)
}
// module.exports.watch = watchHandler;
//总的一起监视
module.exports.default = gulp.series(
    delHandler,
    gulp.parallel(cssHandler,jsHandler,htmlHandler,imgHandler,libHandler,sassHandler),
    // serverHandler,
    // watchHandler
)