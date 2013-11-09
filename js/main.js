$(document).ready(function(){
    var ajaxstate="normal";
    var navlink=$(".sa-nav");
    var used_list=Array();
    navlink.update=function(urlx){
        var strs="";
        for(var i= 0;i<used_list.length;i++){
            strs+="<span class='annoymous'>></span>"+"<a style='text-decoration:none;color:#b3d4fc;'>"+ used_list[i]+'</a>'
        }
        navlink.html(strs);
    }






    function buffering(){
        if(ajaxstate!="normal"){
            $("#show_area").fadeOut(100,function(){
                $("buffer-img").css("display","block")
            })
        }
        else{$("buffer-img").css("display","none")}
    }
    setInterval(buffering,1000);
    function loadx(urlx,elm){
        $("#show_area").load(urlx,function(responseTxt,statusTXT){
            if(statusTXT=="success"){



                if(elm.attr("alt"))var xx=elm.attr("alt");
                else var xx=elm.text();
                alert(xx);
                concat(used_list,(xx));//图片的文字为alt属性，《p》即文字。
                alert(elm.attr("alt"));
                alert(used_list[0].name)
                navlink.update(urlx);



                ajaxstate="normal";
                $(".sa-bind-click").each(function(i,ss){//在图片和文字说明上添加class“sa-bind-click”，可以从此绑定handler；
                    $(ss).bind("click",function(){loadx($(ss).attr("href"));});
                })
            }
            else {ajaxstate="abnormal";}
        })
    }
    loadx("load/rant.html",$("#show_area"))
})


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