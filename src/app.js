(function (angular) {
    var app=angular.module("doubanApp",[
        "home",
        "douban_theaters",
        "douban_coming_soon",
        "douban_top250",
        "movie_detail"
    ]);
//    …Ë÷√#≥ı ºªØ
    app.config(["$locationProvider",function($locationProvider){
        $locationProvider.hashPrefix("");
    }]);

    app.controller("menuList",["$scope",function($scope){
       $scope.isActive=function(i){
           $scope.i=1;
           $scope.i=i;
       }
    }])
})(angular);