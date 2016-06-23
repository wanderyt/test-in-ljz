// var moment = require("moment");

// var test = {
//     name: "david",
//     age: 12
// };

// console.log(moment().format("YYYY-MM-DD HH:mm:ss"));

var gulp = require("gulp");
var webpack = require("webpack-stream");

gulp.task("default", function() {
  return gulp.src("ui/src/entry.js")
    .pipe(webpack(require("./webpack.config.js")))
    .pipe(gulp.dest("dist/"));
});

// var test = require("dist/entry.js");
// console.log(test.name);