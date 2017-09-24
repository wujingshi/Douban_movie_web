(function (angular) {
    var app=angular.module("doubanApp",["home","douban_theaters"]);
//    …Ë÷√#≥ı ºªØ
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);

})(angular);