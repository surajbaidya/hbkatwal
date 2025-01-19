

// carousel for testimonial------------------------------------------------------------------
var owl = $('.testimonial-carousel');
owl.owlCarousel({
    items:4,
    loop:true,
    margin:10,
    responsiveClass:true,
    autoplay:true,
    autoplayTimeout:2500,
    autoplayHoverPause:true,
    nav:false,

    dots:true,
    responsive:{
        0:{
            items:1,
            nav:false
        },
        600:{
            items:1,
            nav:false
        },
        1000:{
            items:1,
            nav:false,
            loop:false
        }
    }
});
$('.play').on('click',function(){
    owl.trigger('play.owl.autoplay',[2500])
})
$('.stop').on('click',function(){
    owl.trigger('stop.owl.autoplay')
})

// sticky navbar
window .addEventListener('scroll',function(){
    var header=document.querySelector('.navbar');
    header.classList.toggle("sticky",window.scrollY>0);
});
function w3_open() {
  document.getElementsByClassName("navbar-nav")[0].style.display = "flex";
  document.getElementsByClassName("backdrop-overlay")[0].style.display = "flex";
}
function w3_close() {
  document.getElementsByClassName("navbar-nav")[0].style.display = "none";
  document.getElementsByClassName("backdrop-overlay")[0].style.display = "none";
}

// carousel for latest-videos
$('.owl-video-carousel').owlCarousel({
    loop: true,
    margin: 20,
    dots: false,
    nav: true,
    navText: ["<i class='fa-solid fa-chevron-left'></i>", "<i class='fa-solid fa-chevron-right'></i>"],
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true
      },
      500: {
        items: 1,
        nav: true
      },
      800: {
        items: 2,
        nav: true
      },
      1000: {
        items: 3,
        nav: true
      },
      1024:{
          items:3,
          nav:true
      },
      1800: {
        items: 3,
        nav: true
      }
    }
  });

  /* JS for gallary image popup */
  $(document).ready(function(){
    $('.gallery__image').magnificPopup({
      type: 'image',
      mainClass: 'mfp-with-zoom', 
      gallery:{
          enabled:true
        },
    
      zoom: {
        enabled: true, 
    
        duration: 300, // duration of the effect, in milliseconds
        easing: 'ease-in-out', // CSS transition easing function
    
        opener: function(openerElement) {
    
          return openerElement.is('img') ? openerElement : openerElement.find('img');
      }
    }
    
    });
    
    });