(function (angular) {
    var app=angular.module("doubanApp",["home","douban_theaters"]);
//    ����#��ʼ��
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);

})(angular);