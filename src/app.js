(function (angular) {
    var app=angular.module("doubanApp",["home","douban_theaters","douban_coming_soon","douban_top250"]);
//    ����#��ʼ��
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);

})(angular);