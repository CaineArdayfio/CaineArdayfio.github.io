const tilt = $('.js-tilt').tilt({
  maxTilt: 10,
});

// Smooth scroll
$("nav ul li a").click(function() {
  $('html, body').css({'scroll-snap-type': 'none'})
  $('html, body').animate({
      scrollTop: $("#" + $(this).data('page')).offset().top},
      'slow',
      function(){
        $('html, body').css({'scroll-snap-type': 'y mandatory'})
      });
});

// Navbar scroll
const sections = document.querySelectorAll(".panel");
const navLi = document.querySelectorAll("nav ul li a");
window.onscroll = () => {
  var current = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    if (pageYOffset >= sectionTop ) {
      current = section.getAttribute("id"); }
  });

  navLi.forEach((li) => {
    li.classList.remove("active");
    if ($(li).data('page') === current) {
      li.classList.add("active");
    }
  });
};

// Icon hover
$( "div.icons .square" ).hover(function () {
  if($(this).attr('id') === 'hpair'){
    $(this).children('img').animate({
      top: '15%',
    })
    $(this).children('.banner').animate({
      top: '27%',
    })
  } else if($(this).attr('id') === 'lilly'){
    $(this).children('img').animate({
      top: '15%',
    })
    $(this).children('.banner').animate({
      top: '28%',
    })
  } else if($(this).attr('id') === 'liberty'){
    $(this).children('img').animate({
      top: '15%',
    })
    $(this).children('.banner').animate({
      top: '28%',
    })
  }
}, function() {
  if($(this).attr('id') === 'hpair'){
    $(this).children('img').animate({
      top: '35%',
    })
    $(this).children('.banner').animate({
      top: '100%',
    })
  } else if($(this).attr('id') === 'lilly'){
    $(this).children('img').animate({
      top: '35%',
    })
    $(this).children('.banner').animate({
      top: '100%',
    })
  } else if($(this).attr('id') === 'liberty'){
    $(this).children('img').animate({
      top: '35%',
    })
    $(this).children('.banner').animate({
      top: '100%',
    })
  }
});

// PARTICLES
var canvasDiv = document.getElementById('particle-canvas');
var options = {
  particleColor: '#e37575',
  interactive: true,
  background: 'transparent',
};
var particleCanvas = new ParticleNetwork(canvasDiv, options);

// COLOR CHANGER
$(window).scroll(function() {
  // selectors
  var $window = $(window),
      $body = $('body'),
      $panel = $('.panel');

  // Change 33% earlier than scroll position so colour is there when you arrive.
  var scroll = $window.scrollTop() + ($window.height() / 3);

  $panel.each(function () {
    var $this = $(this);

    // If position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      // Remove all classes on body with color-
      //$this.find('.fade-text').css({'display':'block', 'opacity':'0', 'top':'50px', 'position': 'relative'});
      $this.find('.fade-text').animate({
        opacity: '1'
      }, { duration: 800, queue: false });
      $this.find('.fade-text').animate({
        top: '0px'
      }, { duration: 500, queue: false });

      if($this.attr('id') === 'page-intro'){
        $('div#main').removeClass()
        $('div#main').addClass('color-black')
      } else if($this.attr('id') === 'page-about'){
        $('div#main').removeClass()
        $('div#main').addClass('color-black')
      } else if($this.attr('id') === 'page-eniac'){
        $('div#main').removeClass()
        $('div#main').addClass('color-red')
      } else if($this.attr('id') === 'page-quidio'){
        $('div#main').removeClass()
        $('div#main').addClass('color-yellow')
      }
    }
  });

}).scroll();