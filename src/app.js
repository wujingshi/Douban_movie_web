(function (angular) {
    var app=angular.module("doubanApp",["home"]);
//    ����#��ʼ��
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);

})(angular);