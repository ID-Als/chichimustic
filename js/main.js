$(document).ready(function(){
    $(".sa-rant").click(function(){
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
    })
})