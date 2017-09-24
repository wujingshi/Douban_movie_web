/**
 * Created by wujingshi on 2017/9/24.
 */
(function(angular){
    var app=angular.module("home",["ngRoute"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/home",{
            templateUrl:"./home/home.html"
        }).when("/",{
            redirectTo:"/home"
        })
    }]);
})(angular)