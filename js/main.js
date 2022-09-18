$(document).ready(function(){
  $(window).on('load',function(){
    $('.preloader').addClass("complete");
  });
    $(window).on('scroll',function(){
        var scroll = $(window).scrollTop();
        if(scroll>=50){
          $(".sticky").addClass("stickyadd");
        }else{
          $(".sticky").removeClass("stickyadd");
        }
    });


    var typed = new Typed(".element",{
      strings: ["Musty dove","a Developer","a Designer", "a Businessman"],
      smartBackspace:true,
      typeSpeed:100,
      backSpeed:100,
      loop:true,
      loopcount:Infinity,
      startDelay:1000
    });

    // progress bars
    var waypoint = new Waypoint({
      element: document.getElementById('exp-id'),
      handler: function() {
        var p = document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style", "width:100%;transition:1s all");
        p[1].setAttribute("style", "width:85%;transition:1.5s all");
        p[2].setAttribute("style", "width:75%;transition:1.7s all");
        p[3].setAttribute("style", "width:65%;transition:2s all");
        p[4].setAttribute("style", "width:55%;transition:2.3s all");
      },
      offset: '90%'
    });

    // adding fadeInUp animation to child of div with class .way-col
    var $child = $('.way-fade-up').children();
    $child.each(function(){
      var self= $(this);
      $(this).waypoint(function(){
        self.addClass('animated fadeInUp');
      },{offset: '90%'});
    });

    var $child = $('.way-fade-left').children();
    $child.each(function(){
      var self= $(this);
      $(this).waypoint(function(){
        self.addClass('animated fadeInLeft');
      },{offset: '90%'});
    });

    var $child = $('.way-fade-right').children();
    $child.each(function(){
      var self= $(this);
      $(this).waypoint(function(){
        self.addClass('animated fadeInRight');
      },{offset: '90%'});
    });
    
    // owl carousel
    $(".owl-carousel").owlCarousel({
      loop:true,
      autoplay:true,
      autoplayTimeout:4000,
      items:1,
      // animateOut  :  "fadeOut",
      animationIn  :  "fadeRight"
    });
    var filterizd = $('.filter-container').filterizr({
         animationDuration: .5,
    });

    $('a').smoothScroll({
      speed:2000,
    });
}); 

function sendEmail(){
  Email.send({
    Host : "smtp.elasticemail.com",
    Username : "afolabimustopha3@gmail.com",
    Password : "33FF90631A9D87296C0917F2D115DA6DF086",
    To : 'afolabimustopha3@gmail.com',
    From : "afolabimustopha3@gmail.com",
    Subject : "This is the form email",
    Body : "And this is the user"
}).then(
  message => alert(message)
);
} 