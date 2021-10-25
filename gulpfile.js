var gulp = require('gulp'); //gulp 모듈 호출
var react = require('react'); //react 모듈 호출

var concat = require('gulp-concat'); //gulp의 concat 패키지 모듈 호출
//jQuery 객체를 사용하기 위해 jQuery 객체를 호출하듯이 require 해야함
//gulp-concat 패키지 모듈을 사용하기 위해서는 npm으로 (npm i gulp --save-dev) 사용하려는 gulp 모듈 패키지를 설치 해야함

//task란? 수행해야할 일
//gulp.task()를 사용해 combine:js 테스크를 정의
gulp.task('combine:js', ['lint-js'], function(){ 
    //name: task의 이름을 지정하고 공백이 포함되면 안됨
    //deps: 현재 선언하고 있는 task를 수행하기 전에 먼저 실행되어야 하는 task들의 배열목록 작성.
    //      위의 예제에서는 javascript 파일을 병합하는 task를 진행하기 전에 javascript Lint(자바스크립트 문법검사)
    //      를 먼저 수행하도록 정의.
    //func: 실제 수행할 업무 프로세스를 정의하는 function(처리해야할 일을 정의)
    //만약 선행되어야 하는 task가 없다면 굳이 두번째 파라미터를 줄 필요 없이 gulp.task('name',fn);으로 정의해도 된다.
    return gulp.src('/project/js/**/*.js')
    //gulp.src(files) 메소드 줄은 gulp 객체의 src()에 파일이나 파일의 경로를 배열 데이터 형식(배열 또는 string)으로 작성
    //해당 task의 대상이 되는 파일들을 지정해주는 역할
    //파일을 선택하는 방식은 node-glob의 문법
    //

    .pipe(concat(scriptAll.js))
    .pipe(react())
    .pipe(gulp.dest('project/dist/js'));

});

gulp.task('default', ['combine:js']);