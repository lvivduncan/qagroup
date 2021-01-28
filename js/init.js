
// response
$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay:true,
    autoplayTimeout:5000,
    autoplayHoverPause:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:4
        }
    }
});


// modules
(function($) {
    
    var allPanels = $('#accordion > dd').hide();
      
    $('#accordion > dt > a').click(function() {
      allPanels.slideUp();
      $(this).parent().next().slideDown();
      return false;
    });
  
})(jQuery);


// faq
(function($) {
    
    var allPanels = $('#faq > dd').hide();
      
    $('#faq > dt > a').click(function() {
      allPanels.slideUp();
      $(this).parent().next().slideDown();
      return false;
    });
  
})(jQuery);




// to up
$(window).scroll(function(){
    if ($(this).scrollTop() > 100) {
        $('#up').fadeIn();
    } else {
        $('#up').fadeOut();
}});
    
$('#up').click(function(){
    $("html, body").animate({ scrollTop: 0 }, 600);
    return false;
});



new WOW().init();