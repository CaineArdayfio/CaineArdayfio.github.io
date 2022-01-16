// Smooth scroll
$("nav ul li a").click(function() {
  $('html,body').animate({
      scrollTop: $("#" + $(this).data('page')).offset().top},
      'slow');
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

    // if position is within range of this panel.
    // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
    // Remember we set the scroll to 33% earlier in scroll var.
    /*
    $('div#main').css({
          background: "red" //"linear-gradient(23deg, #4287F5 50%, #3875d8 50%)"
        })
    */
    if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
      // Remove all classes on body with color-
      $this.find('.fade-text').delay(300).fadeIn(1000);
      if($this.attr('id') === 'page-intro' || $this.attr('id') === 'page-about'){
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