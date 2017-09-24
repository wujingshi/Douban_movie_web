(function (angular) {
    var app=angular.module("doubanApp",["home"]);
//    …Ë÷√#≥ı ºªØ
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);

})(angular);