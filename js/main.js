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
        
        margin: 50,
        dots: true,
        nav: false,
        mouseDrag: true,
        autoplay: false,
        autoplayTimeout: 4000,
        smartSpeed: 800,
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

    /*-------------Counter Faculty-------*/
    // $('.counter-value').each(function(){
    //     $(this).prop('Counter',0).animate({
    //         Counter: $(this).text()
    //     },{
    //         duration: 3500,
    //         easing: 'swing',
    //         step: function (now){
    //             $(this).text(Math.ceil(now));
    //         }
    //     });
    // });
   


});