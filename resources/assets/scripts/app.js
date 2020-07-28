/**
 * External Dependencies
 */
import 'jquery';
import 'alpinejs';
import 'lity';
import Flickity from 'flickity';

var json = require('./particlesjs.json');
import { tsParticles } from "tsparticles";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin, SplitText);

$(document).ready(() => {
  // console.log('Hello world');
  $(window).smartresize(function(e){
    $('.slide').hide().show(0);
    flkty.resize();
  });

  $('input[type=radio]').addClass('form-radio');

  $(document).bind('gform_post_render', function() {
    $('input[type=radio]').addClass('form-radio');
    if(window.matchMedia("(min-width: 768px)")) {
      $("#field_1_4, #field_1_7").wrapAll('<div class="form-group" />');
    }
  })

var flkty = new Flickity( '.offer-carousel', {
  // options
  cellAlign: 'center',
  contain: true,
  watchCSS: true,
  prevNextButtons: false,
});

var flkty = new Flickity( '.operate-carousel', {
  // options
  cellAlign: 'center',
  contain: true,
  arrowShape: 'M1.9,47.4a2.9,2.9,0,0,0,0,4.2L20.8,70.5c2.6,2.8,6.9-1.5,4.2-4.2L8.2,49.5,25,32.7c2.7-2.7-1.5-7-4.2-4.2ZM99,46.5H4v6H99Z',
});

var flkty = new Flickity( '.study-carousel', {
  // options
  cellAlign: 'left',
  imagesLoaded: true,
  contain: true,
  watchCSS: true,
});

Flickity.prototype._createResizeClass = function() {
  this.element.classList.add('flickity-resize');
};

Flickity.createMethods.push('_createResizeClass');

var resize = Flickity.prototype.resize;
Flickity.prototype.resize = function() {
  this.element.classList.remove('flickity-resize');
  resize.call( this );
  this.element.classList.add('flickity-resize');
};


$(".operate-carousel .flickity-button").wrapAll('<div class="flickity-buttons" />');
$(".operate-carousel .flickity-buttons, .operate-carousel .flickity-page-dots").wrapAll('<div class="flickity-controls" />');
$(".study-carousel .flickity-button, .study-carousel .flickity-page-dots").wrapAll('<div class="flickity-controls" />');

if(window.matchMedia("(min-width: 768px)")) {
  $("#field_1_4, #field_1_7").wrapAll('<div class="form-group" />');
}


$('#gform_1 :input').change(function() {
  let filled = true;
  $('#gform_1 .gfield_contains_required :input').each(function(i, e) {
    if(!$(e).val()) filled = false;
    // console.log($(e).val());
    if(e.type === 'radio') {
      if($('input[name="input_7"]').is(':checked')) {
        filled = true;
      }
    }
  })


  if(filled) {
    $('#gform_submit_button_1').css('border-color', '#D6A95B');
  }
  else {
    $('#gform_submit_button_1').css('border-color', '#cccccc');
  }
});

// if(!allRequired){
//   console.log(allRequired);
// }

//Animations
if($('#tsparticles').is(':visible')) {
  tsParticles
  .load("tsparticles", json)
  // .then((container) => {
  //   // console.log("callback - tsparticles config loaded");
  // })
  .catch((error) => {
    console.error(error);
  });
}

//Hero Animations
var tl = gsap.timeline(),
  title = new SplitText("#hero-text h1", {type: "lines", linesClass: "slide-child" }),
  titleSplit = new SplitText("#hero-text h1", {type: "lines", linesClass: "slide" }),

  p = new SplitText("#hero-text p", {type: "lines", linesClass: "slide-child" }),
  pSplit = new SplitText("#hero-text p", {type: "lines", linesClass: "slide" }),

  lines = title.lines,
  plines = p.lines;
;

tl.from(lines, {
  opacity: 1,
  yPercent: -100,
  duration: .7, 
  stagger: .2,
  delay: 0.5,
});
tl.from(plines, {
  opacity: 1,
  yPercent: -100,
  duration: .4, 
  stagger: .2,
});

$('#scroll-down').on('click', function(e) {
  e.preventDefault();
  var $this = $(this),
  href = $this.attr("href"),
  topY = $(href).offset().top;
  gsap.to(window, {duration: 1.5, scrollTo: {y: topY}});
});

var sd = gsap.timeline({repeat: -1, paused: true });
sd.fromTo('#scroll-down svg', {
  yPercent: -100,
}, {
  yPercent: 150,
  duration: 1,
});
sd.progress(0.23).pause();

$('#scroll-down').on('mouseenter', function(e) {
  sd.play();
});

$('#scroll-down').on('mouseleave', function(e) {
  sd.progress(0.23).pause();
});


//About Animations
tl.fromTo(".img-swipe", {
  xPercent: 0,
  }, {
  xPercent: 100,
  duration: 1.7,
})

gsap.fromTo(".fade-left", {
  autoAlpha: 0,
  x: -25,
  }, {
  scrollTrigger: {
    trigger: '#about',
    start: "top 60%",
    // markers: true,
  },
  autoAlpha: 1,
  x: 0,
  duration: 1.5,
});

//Offerings Animations

var at = gsap.timeline({
  scrollTrigger: {
    trigger: '#offerings',
    start: "top 50%",
    // markers: true,
  },
},
);

var atitle = new SplitText("#offerings h2", {type: "lines", linesClass: "slide-child" });
var atitleSplit = new SplitText("#offerings h2", {type: "lines", linesClass: "slide-down" });

var ap = new SplitText("#offerings .subtitle", {type: "lines", linesClass: "slide-child" });
var apSplit = new SplitText("#offerings .subtitle", {type: "lines", linesClass: "slide-down" });

at.from(ap.lines, {
  opacity: 1,
  yPercent: -100,
  duration: .4, 
  stagger: .1,
});
at.from(atitle.lines, {
  opacity: 1,
  yPercent: -100,
  duration: .7, 
  stagger: .2,
});

mqlWatch("(min-width: 768px)", function(matches) {
  if(matches) {
    var aboutBoxes = gsap.utils.toArray(".offer-carousel .slide");
    at.from(aboutBoxes, {
      opacity: 1,
      xPercent: -125,
      duration: 1.3, 
      stagger: .3,
    });
  }
})


//Operating Animations
var op = gsap.timeline({
  scrollTrigger: {
    trigger: '#pillars',
    start: "top 60%",
    // markers: true,
  },
},
);

var optitle = new SplitText("#pillars h2", {type: "lines", linesClass: "slide-child" });
var optitleSplit = new SplitText("#pillars h2", {type: "lines", linesClass: "slide-down" });

var opp = new SplitText("#pillars .subtitle", {type: "lines", linesClass: "slide-child" });
var oppSplit = new SplitText("#pillars .subtitle", {type: "lines", linesClass: "slide-down" });

op.from(opp.lines, {
  opacity: 1,
  yPercent: -100,
  duration: .4, 
  stagger: .1,
});
op.from(optitle.lines, {
  opacity: 1,
  yPercent: -100,
  duration: .7, 
  stagger: .2,
});

op.fromTo(".img-swipe-pillar", {
  xPercent: 0,
  }, {
  xPercent: 100,
  stagger: .3,
  duration: 1.7,
})

//Case Study Animations
var cs = gsap.timeline({
  scrollTrigger: {
    trigger: '.operate-carousel .flickity-buttons',
    endTrigger: '#case-study',
    start: "top 60%",
    //markers: true,
  },
},
);

cs.from("#case-study .title-container", {
  opacity: 1,
  yPercent: -100,
  duration: .7,
})

cs.fromTo(".color-swipe-study", {
  xPercent: 0,
  }, {
  xPercent: 100,
  stagger: .3,
  duration: 2.3,
})

//Contact Animations
gsap.fromTo(".img-swipe-contact", {
  xPercent: 0,
  }, {
  scrollTrigger: {
    trigger: '.study-carousel .flickity-controls',
    endTrigger: '#contact',
    start: "top 60%",
    // markers: true,
  },
  xPercent: 100,
  duration: 1.7,
})

gsap.fromTo(".form-container", {
  autoAlpha: 0,
  x: -25,
  }, {
  scrollTrigger: {
    trigger: '.study-carousel .flickity-controls',
    endTrigger: '#contact',
    start: "top 60%",
    // markers: true,
  },
  autoAlpha: 1,
  x: 0,
  duration: 1.5,
});

//Nav Animations

gsap.to('#nav', {
  scrollTrigger: {
    trigger: '#hero-text',
    start: "top",
    endTrigger: "html",
    end:"bottom top",
    toggleClass: {targets: "#nav", className: "active"},
    // markers: true,
  }
});

$('#return-top').on('click', function(e) {
  e.preventDefault();
  gsap.to(window, {duration: 2, scrollTo: {y: 0}});
});

const navLinks = gsap.utils.toArray(".nav-container .nav-link");
//console.log(navLinks);
navLinks.forEach((link, i) => {
  link.addEventListener("click", function(e) {
    e.preventDefault();
    gsap.to(window, {duration: 1.5, scrollTo: {y: e.currentTarget.getAttribute("href"), offsetY: 100 }});
  });
});

gsap.utils.toArray(".section").forEach((box, i) => {
  var id = box.getAttribute("id");
  gsap.to(box, {
    scrollTrigger: {
      trigger: box,
      start: "top 80%",
      end: "bottom 20%",
      // markers: true,
      toggleClass: {targets: ".nav-container a[href='#" + id + "']", className: "active"},
    },
  });
});


//End Document Ready
});

function mqlWatch(mediaQuery, layoutChangedCallback) {
  var mql = window.matchMedia(mediaQuery);
  mql.addListener(function (e) { return layoutChangedCallback(e.matches); });
  layoutChangedCallback(mql.matches);
}




(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');