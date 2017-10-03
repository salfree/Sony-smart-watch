$(function(){

    $('.animate').each(function (i) {

        setTimeout(function () {
            $('.head-img').addClass('is-animating');
            $('.animate').eq(i).addClass('is-animating');
        }, 150 * (i + 1))
    })
    
    

    $('#watches').click(function () {

                $('html, body').animate({
                    scrollTop: $('#watches-des').offset().top
                }, 1200);
        
    });
    
    $('.menu-icon').click(function(){
        $('.slid-menu').toggleClass('block');
    });
    
    $('#submit-btn').click(function() {
        swal("Thank you!", "keep calm and stop complaining", "success");
    });
    
})
$(window).scroll(function(){
    
    var wScroll = $(this).scrollTop();
    
    // first title and text
    if(wScroll > $('.section2').offset().top - ($(window).height() / 1.2)) {
        
        $('.pre-animate').each(function(e){
            setTimeout(function(){
                $('.pre-animate').eq(e).addClass('title-showing');
            },250 * (e+1))
        })  
    }
    
    // secound title and text
    if(wScroll > $('.section5').offset().top - ($(window).height() / 1.2)) {
        
        $('.pre-animate2').each(function(a){
            setTimeout(function(){
                $('.pre-animate2').eq(a).addClass('title-showing');
            }, 250 * (a+1))
        })  
    }
    
    //form
    if(wScroll > $('.form-section').offset().top - ($(window).height() / 1.5)) {
        
       $('.pre-animate3').addClass('animate3-showing');
        }
    
})