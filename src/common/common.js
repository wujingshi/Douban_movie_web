/**
 * Created by wujingshi on 2017/9/24.
 */
(function(angular){
    var app=angular.module("common",[]);
    var id=1;
    app.factory("serjsonp",["$window",function($window){
        return function(opts){
            var url=opts.url+"?";
            for(var key in opts.params){
                url+=(key+"="+opts.params[key]+"&");
            }
            //±£´æ»Øµ÷
            var callbackName="serjsonp_"+(id++);
            window[callbackName]=opts.callback;
            url+="callback="+callbackName;

            var script=$window.document.createElement("script");
            script.src=url;
            $window.document.body.appendChild(script);
        }
    }])

})(angular)