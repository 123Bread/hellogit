/*! financing_clearing_system v1.0.0
*  by [object Object]
*  (c) 2014-2016 www.frontpay.cn
* updated on 2016-11-14
*  Licensed under Apache-2.0
*/
 var gulp=require("gulp"),concat=require("gulp-concat"),uglify=require("gulp-uglify"),files=["echarts.js","chart/bar.js","theme/paywe.js","mycharts.js"];gulp.task("compile",function(){return gulp.src(files).pipe(concat("payweChart.js")).pipe(uglify({mangle:!1})).pipe(gulp.dest(__dirname))}),gulp.task("default",function(){gulp.start(["compile"])});