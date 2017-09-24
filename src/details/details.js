/**
 * Created by wujingshi on 2017/9/24.
 */
(function(angular){
    var app=angular.module("movie_detail",["ngRoute","common"]);
    app.config(["$routeProvider",function($routeProvider){
        $routeProvider.when("/details/:id",{
            templateUrl:"./details/details.html",
            controller:"detailsContro"
        })
    }]);
    app.controller("detailsContro",["$scope","$routeParams","serjsonp",function($scope,$routeParams,serjsonp){
        serjsonp({
            url:"http://api.douban.com/v2/movie/subject/"+$routeParams.id,
            params:{},
            callback:function(data){
                $scope.movie=data;
                $scope.isShow=false;
                $scope.$apply();
            }
        })
    }])
})(angular)