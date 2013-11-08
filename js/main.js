$(document).ready(function(){
    $("#show_area").load("load/rant.html",function(responseTxt,statusTxt,xhr){
                var a=$("#show_area");
                if(statusTxt=="success"){a.innerHTML=statusTxt;}
                else {a.innerHTML=xhr.status+": "+xhr.statusText;}
    })
    $(".sa-rant").each(function(){
        $(this).click(function(event){
            $("#show_area").load($(event.target).find("p.label").attr("href"),function(responseTxt,statusTxt,xhr){
                    var a=$("#show_area");
                    if(statusTxt=="success"){a.innerHTML=statusTxt;}
                    else {a.innerHTML=xhr.status+": "+xhr.statusText;}
})})})})






/*$(document).ready(function(){
    var rant_list=[{name:"yican",dis_name:"一餐"},{name:"ercan",dis_name:"二餐"},{name:"sancan",dis_name:"三餐"}]

    for(var i= 0;i<rant_list.length;i++){
        var ss=rant_list[i];
        ss.rant_url="load/"+ss.name+"/food.json";
        var str="<g class='sa-rant'><l class='sa-rant-img'></l><p class='label' href="+ss.rant_url+">"+ss.dis_name+"</p></g>";
        $("#show_area").append(str);
    }
    $("p.label").each(function(){
        $(this).click(function(event){
            $("#show_area").load($(event.target).attr("href"),function(responseTxt,statusTxt,xhr){
                var a=$("#show_area");
                if(statusTxt=="success"){a.innerHTML=statusTxt;}
                else {a.innerHTML=xhr.status+": "+xhr.statusText;}
    })})})

})*/

/*xxx[i].click(function(){
            $(".show_area").load("load/food.html",function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success"){
                var a=$(".show_area");
                a.innerHTML=statusTxt;
            }
            else {
                var txt=xhr.status+": "+xhr.statusText;
                a.innerHTML=txt;
            }
        })
        })*/
/*$(".sa-rant").click(function(){
        $(".show_area").load("load/food.html",function(responseTxt,statusTxt,xhr){
            if(statusTxt=="success"){
                var a=$(".show_area");
                a.innerHTML=statusTxt;
            }
            else {
                var txt=xhr.status+": "+xhr.statusText;
                a.innerHTML=txt;
            }
        })
    })*/
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