$(document).ready(function(){
    var xxx=$("div.showarea").children();
    xxx.each(function(i,ss){
        $(ss).click(function(){
            $(".showarea").load("sa-rant.html",function(responseTxt,statusTxt,xhr){
                var a=$(".show_area");
            if(statusTxt=="success"){
                a.innerHTML=statusTxt;
            }
            else {
                var txt=xhr.status+": "+xhr.statusText;
                a.innerHTML=txt;
            }
        })})
    })

        /*xxx[i].click(function(){
            $(".show_area").load("load/sa-rant.html",function(responseTxt,statusTxt,xhr){
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
        $(".show_area").load("load/sa-rant.html",function(responseTxt,statusTxt,xhr){
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
})


var saApp=angular.module("saApp",[])

saApp.controller('saCtrl', ['$scope', function($scope) {
    $scope.current_anchor="";
    $scope.current_url="";
    $scope.rants = [{"name":"yican","dis_name":"一餐"},
                    {"name":"ercan","dis_name":"二餐"},
                        {"name":"sancan","dis_name":"三餐"}];
    function httpget(){
        httpurl='/'+current_url+rant.name+'/food';
        $scope.rants=[{"name":"xxx","dis_name":httpurl},{"name":"xxx","dis_name":"一品川菜"},{"name":"xxx","dis_name":"一品川菜"}]
        $scope.current_anchor+=httpurl;
    }

}])