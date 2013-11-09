$(document).ready(function(){
    var ajaxstate="normal";
    function buffering(){
        if(ajaxstate!="normal"){
            $("#show_area").fadeOut(100,function(){
                $(".buffer-img").css("display","block")})
        }
        else{$(".buffer-img").css("display","none")}
    }
    setInterval(buffering,500);
    function loadx(urlx,elm){
        $("#show_area").load(urlx,function(responseTxt,statusTXT){
            if(statusTXT=="success"){
                ajaxstate="normal";
                $(".sa-bind-click").each(function(i,ss){//添加class“sa-bind-click”，可以从此绑定handler；
                    $(ss).bind("click",function(){loadx($(ss).attr("href"),$(ss));});})
            }
            else {ajaxstate="abnormal";}})
    }
    loadx("load/rant.html",$("#show_area"))
})

//navlink.update(elm);
/*var navlink=$(".sa-nav");
    var used_list=[];
    navlink.update=function(elm){
        var strs="";
        used_list.push({load:"餐厅列表"});

        for(var i= 0;i<used_list.length;i++){
            strs+="<span class='anonymous sa-bind-click'>></span>"+"<a style='text-decoration:none;color:#b3d4fc;' href="
                +elm.attr('href')+">"+elm.text()+'</a>'
        }
        navlink.html(strs);
    }*/
/*var saApp=angular.module("saApp",[])

saApp.controller('saCtrl', ['$scope', function ($scope) {
    $scope.current_anchor = "";
    $scope.current_url = "";
    $scope.rants = [
        {"name": "yican", "dis_name": "一餐"},
        {"name": "ercan", "dis_name": "二餐"},
        {"name": "sancan", "dis_name": "三餐"}
    ];
    function httpget() {
        httpurl = '/' + current_url + rant.name + '/food';
        $scope.rants = [
            {"name": "xxx", "dis_name": httpurl},
            {"name": "xxx", "dis_name": "一品川菜"},
            {"name": "xxx", "dis_name": "一品川菜"}
        ]
        $scope.current_anchor += httpurl;
    }
}]);*/