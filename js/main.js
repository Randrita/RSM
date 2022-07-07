$(document).ready(function(){
    /*---------video popup---------*/
    const videoSrc=$("#player-1").attr("src");
    $(".video-play-btn, .video-popup").on("click",function(){
        if($(".video-popup").hasClass("open")){
            $(".video-popup").removeClass("open");
            $("#player-1").attr("src","");
        }
        else{
            $(".video-popup").addClass("open");
            if($("#player-1").attr("src")==''){
                $("#player-1").attr("src",videoSrc);
            }
        }
    });

   /*------carousel--------*/
   $('.features-carousel').owlCarousel({
    loop:true,
    margin:10,
    autoplay:true,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            
        },
        600:{
            items:2
        },
        1000:{
            items:3,
        }
    }
    });

    /*-----testimonials------*/
    $(".testimonial-content").owlCarousel({
        loop: true,
        items: 2,
        margin: 50,
        dots: true,
        nav: false,
        mouseDrag: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 800
    });  

    /*-------------Counter Faculty-------*/
        $('.count-number').counterUp({
            delay: 10,
            time: 10000
        });
   

});