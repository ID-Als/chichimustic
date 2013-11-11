$(document).ready(function(){
    var ajaxstate="normal";
    function urlparser(urlx){

    }
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

//LinkUpdate(urlx,elm)
/*function LinkUpdate(urlx,elm) {
        var x=elm.attr("alt")
        if(elm.attr("class")=="navlink sa-bind-click"){
            elm.nextAll().each(function(){this.remove();alert("removed1")});
            elm.remove();alert("removed2");;elm.prevAll().each(function(){
                this.remove();
            });alert("removed3");
        }
        var xxx=$(".sa-nav");
        var strings=xxx.innerHTML;
        xxx.innerHTML="";

        strings += "<span class='anonymous'>&gt</span> <span class='navlink sa-bind-click'"
                    +" style='text-decoration:none;color:#b3d4fc;' alt="+ x +" href="
                    + urlx + ">" + x + '</span>';
        xxx.append(strings);
    };*/
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