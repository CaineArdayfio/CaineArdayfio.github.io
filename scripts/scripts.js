
function disableScroll() {
  // Get the current page scroll position
  scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  scrollLeft = window.pageXOffset || document.documentElement.scrollLeft,

      // if any scroll is attempted, set this to the previous value
      window.onscroll = function() {
          window.scrollTo(scrollLeft, scrollTop);
      };
}

function enableScroll() {
  window.onscroll = function() {};
}

$(document).ready(function() {
  setTimeout(function() {
    $('#page1').animate({
        left: "100%",
      }, 1000, function() {
    });
    
    $('body').css({
      backgroundColor: "#33333B",
    });
    
    $('#page2').animate({
        left: "0%",
      }, 1000, function() {
        // Header Text animation
        anime.timeline({loop: false})
        .add({
          targets: '#slide-1 .letters-top',
          opacity: [0,1],
          //translateX: ["0.5em", 0],
          scaleY: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '+=500',
        }).add({
          targets: '#slide-1 .letters-middle',
          opacity: [0,1],
          //translateX: ["-0.5em", 0],
          scaleY: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '+=500',
        }).add({
          targets: '#slide-1 .letters-bottom',
          opacity: [0,1],
          //translateX: ["-0.5em", 0],
          scaleY: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '+=1200',
        })
        .add({
          targets: '#slide-1 #video-container',
          opacity: [0,1],
          scaleY: [0, 1],
          easing: "easeOutExpo",
          duration: 600,
          offset: '+=600',
        })
        .add({
          targets: '.sidenav a',
          left: '0%',
          easing: "easeOutExpo",
          duration: 600,
          offset: '-=600',
        })

        /*
        var wHeight = $(window).height();
        $('.slide')
        .height(wHeight)
        .scrollie({
          scrollOffset : 0,//-50,
          scrollingInView : function(elem) {
            var bgColor = elem.data('background');
            $('body').css('background-color', bgColor);
          }
        });
        */
    });

  //}, 2000);
  }, 2000);
})