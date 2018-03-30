$(document).ready(function(){
    
    
    
    $("#about").click(function(){
        $(".fixed-slide").css({"z-index": "11", "width":"98%", "background": "black","transition-delay":"0.0s"});
        $("#about").css("display", "none");
        $("#home").css("display", "block");
        $(".about-img").css({"transition-delay":"0s","left":"98%"});
        $(".profile-img").css({"transition-delay":"0.5s","transform":"scale(1)"});
        $(".profile-head").css({"transition-delay":"0.5s","transform":"translateY(0%)","opacity":"1"});
        $(".profile-about").css({"transition-delay":"0.5s","transform":"translateY(0%)","opacity":"1"});
        $(".slidetext h1").css({"transition":"0.5s","transform":"translateX(-250%)","transition-delay":"0s"});
    });
    
    $("#home").click(function(){
        $("#about").css("display", "block");
        $("#home").css("display", "none");
        $(".about-img").css({"transition-delay":"0.5s","left":"50%"});
        $(".fixed-slide").css({"width":"50%", "background": "transparent","transition-delay":"0.5s", "z-index": "0"});
        $(".profile-img").css({"transition-delay":"0s","transform":"scale(0)"});
        $(".profile-head").css({"transition-delay":"0s","transform":"translateY(-200%)","opacity":"0"});
        $(".profile-about").css({"transition-delay":"0s","transform":"translateY(200%)","opacity":"0"});
        $(".slidetext h1").css({"transition":"0.5s","transform":"translateX(-50%)","transition-delay":"0.5s"})
    });
    
    
    
    $(".social").click(function(){
        //$(".social").addClass("social-active");
        $(".social-cont").css({"opacity": "1", "transition-delay":"0.7s"});
        $("#about").css("display", "none");
        $("#home2").css("display", "block");
        $(".about-img").css({"transition-delay":"0.5s","top":"0%"});
        $("#social").hide();
        $(".fixed-slide").css({"width": "0%"});
        $(".slidetext h1").css({"transition":"0.5s","transform":"translateX(150%)"});
    });
    
    $("#home2").click(function(){
        //$(".social").removeClass("social-active");
        $(".social-cont").css({"opacity": "0", "transition-delay":"0s"});
        $("#about").css("display", "block");
        $("#home2").css("display", "none");
        $(".about-img").css({"transition-delay":"0s","top":"50%"});
        $("#social").show();
        $(".fixed-slide").css({"width": "50%"});
        $(".slidetext h1").css({"transition":"0.5s","transform":"translateX(-50%)"})
    });
    
    
    $(".fa-bars").click(function(){
        $(this).css("display","none");
        $(".fa-times").css("display","block");
        $(".menubtn").css({"transition-delay":"0s","top":"2%","left":"230px","transform":"translate(-102%,0%)"});
        $(".menubtn").css({"transition-delay":"0s"});
        $(".slides").css({"transform": "translateX(230px)"});
        $(".slider-base .menu-bar").css({"width": "230px"});
    });
    $(".fa-times").click(function(){
        $(this).css("display","none");
        $(".fa-bars").css("display","block");
        $(".menubtn").css({"transition-delay":"1.1s","top":"2%","left":"4%","transform":"translate(0%,0%)"});
        $(".menubtn").css({"transition-delay":"0s"});
        $(".slides").css({"transform": "translateX(0%)"});
        $(".slider-base .menu-bar").css({"width": "0%"});
    });
    
    $(".menu-item").click(function(){
        $(".back-btn").css("display","block");
    });
    
    
    
    
    
    /*  Contact animation..............*/
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
       
});