/**
 * Created by wujingshi on 2017/9/24.
 */
(function(angular){
    var app=angular.module("douban_theaters",["ngRoute","common"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/in_theaters/:page?",{
            templateUrl:"./in_theaters/in_theaters.html",
            controller:"menuCon"
        })
    }]);

    app.controller("menuCon",["$scope","$route","serjsonp","$routeParams","$window",function($scope,$route,serjsonp,$routeParams,$window){
    //定义每一页的容量
        $scope.pageSize=10;
    //定义页码
        $scope.pageIndex=+($routeParams.page||"1");
    //调取数据
        serjsonp({
            url:"http://api.douban.com/v2/movie/in_theaters",
            params:{
                count:$scope.pageSize,
                start:($scope.pageIndex-1)*$scope.pageSize
            },
            callback:function(data){
                $scope.movie=data;
                $scope.pageCount=$window.Math.ceil(data.total/$scope.pageSize);
                $scope.$apply();
            }
        });
        $scope.getPage=function(pageIndex){
            if(pageIndex<1||pageIndex>$scope.pageCount){
                return;
            }
            $route.updateParams({
                page:pageIndex
            });
        }
    }])
})(angular)