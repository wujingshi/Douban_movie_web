(function (angular) {
    var app=angular.module("doubanApp",["home","douban_theaters","douban_coming_soon","douban_top250"]);
//    …Ë÷√#≥ı ºªØ
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);

})(angular);