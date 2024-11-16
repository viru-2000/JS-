'use strict'


$(document).ready(function() {
    $("#btn").click(function(){
        // alert('clicked')

        var data1 =$('#id1').val();
        var data2 =$('#id2').val();
        var data3 =$('#id3').val();

        var p =parseInt(data1);
        var q =parseInt(data2);
        var r =parseInt(data3);

        var tot =p+q+r;
        console.log(tot);

        var percentage =Math.round((tot/300)*100)
        console.log(percentage);

        document.querySelector("#p1").innerHTML =tot;
        document.querySelector("#p2").innerHTML =percentage ;
        
        if(percentage>75){
            $("#p3").html("First Distinct");
        } else if(percentage>60){
            $("#p3").html("First class");
            
        }else if(percentage>50){
            $("#p3").html("Second class");
            
        }else{
            $("#p3").html("Fail");

        }
        
    })
})



