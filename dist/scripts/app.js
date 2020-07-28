(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["/scripts/app"],{

/***/ "./resources/assets/scripts/app.js":
/*!*****************************************!*\
  !*** ./resources/assets/scripts/app.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function($) {/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! jquery */ "jquery");
/* harmony import */ var jquery__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(jquery__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! alpinejs */ "./node_modules/alpinejs/dist/alpine.js");
/* harmony import */ var alpinejs__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(alpinejs__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lity__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lity */ "./node_modules/lity/dist/lity.js");
/* harmony import */ var lity__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lity__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flickity */ "./node_modules/flickity/js/index.js");
/* harmony import */ var flickity__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flickity__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! tsparticles */ "./node_modules/tsparticles/dist/index.js");
/* harmony import */ var tsparticles__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(tsparticles__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var gsap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! gsap */ "./node_modules/gsap/index.js");
/* harmony import */ var gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! gsap/ScrollTrigger */ "./node_modules/gsap/ScrollTrigger.js");
/* harmony import */ var gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! gsap/ScrollToPlugin */ "./node_modules/gsap/ScrollToPlugin.js");
/* harmony import */ var gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! gsap/SplitText */ "./node_modules/gsap/SplitText.js");
/**
 * External Dependencies
 */





var json = __webpack_require__(/*! ./particlesjs.json */ "./resources/assets/scripts/particlesjs.json");






gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].registerPlugin(gsap_ScrollTrigger__WEBPACK_IMPORTED_MODULE_6__["ScrollTrigger"], gsap_ScrollToPlugin__WEBPACK_IMPORTED_MODULE_7__["ScrollToPlugin"], gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]);
$(document).ready(function () {
  // console.log('Hello world');
  $(window).smartresize(function (e) {
    $('.slide').hide().show(0);
    flkty.resize();
  });
  $('input[type=radio]').addClass('form-radio');
  $(document).bind('gform_post_render', function () {
    $('input[type=radio]').addClass('form-radio');

    if (window.matchMedia("(min-width: 768px)")) {
      $("#field_1_4, #field_1_7").wrapAll('<div class="form-group" />');
    }
  });
  var flkty = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a('.offer-carousel', {
    // options
    cellAlign: 'center',
    contain: true,
    watchCSS: true,
    prevNextButtons: false
  });
  var flkty = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a('.operate-carousel', {
    // options
    cellAlign: 'center',
    contain: true,
    arrowShape: 'M1.9,47.4a2.9,2.9,0,0,0,0,4.2L20.8,70.5c2.6,2.8,6.9-1.5,4.2-4.2L8.2,49.5,25,32.7c2.7-2.7-1.5-7-4.2-4.2ZM99,46.5H4v6H99Z'
  });
  var flkty = new flickity__WEBPACK_IMPORTED_MODULE_3___default.a('.study-carousel', {
    // options
    cellAlign: 'left',
    imagesLoaded: true,
    contain: true,
    watchCSS: true
  });

  flickity__WEBPACK_IMPORTED_MODULE_3___default.a.prototype._createResizeClass = function () {
    this.element.classList.add('flickity-resize');
  };

  flickity__WEBPACK_IMPORTED_MODULE_3___default.a.createMethods.push('_createResizeClass');
  var resize = flickity__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.resize;

  flickity__WEBPACK_IMPORTED_MODULE_3___default.a.prototype.resize = function () {
    this.element.classList.remove('flickity-resize');
    resize.call(this);
    this.element.classList.add('flickity-resize');
  };

  $(".operate-carousel .flickity-button").wrapAll('<div class="flickity-buttons" />');
  $(".operate-carousel .flickity-buttons, .operate-carousel .flickity-page-dots").wrapAll('<div class="flickity-controls" />');
  $(".study-carousel .flickity-button, .study-carousel .flickity-page-dots").wrapAll('<div class="flickity-controls" />');

  if (window.matchMedia("(min-width: 768px)")) {
    $("#field_1_4, #field_1_7").wrapAll('<div class="form-group" />');
  }

  $('#gform_1 :input').change(function () {
    var filled = true;
    $('#gform_1 .gfield_contains_required :input').each(function (i, e) {
      if (!$(e).val()) filled = false; // console.log($(e).val());

      if (e.type === 'radio') {
        if ($('input[name="input_7"]').is(':checked')) {
          filled = true;
        }
      }
    });

    if (filled) {
      $('#gform_submit_button_1').css('border-color', '#D6A95B');
    } else {
      $('#gform_submit_button_1').css('border-color', '#cccccc');
    }
  }); // if(!allRequired){
  //   console.log(allRequired);
  // }
  //Animations

  if ($('#tsparticles').is(':visible')) {
    tsparticles__WEBPACK_IMPORTED_MODULE_4__["tsParticles"].load("tsparticles", json) // .then((container) => {
    //   // console.log("callback - tsparticles config loaded");
    // })
    ["catch"](function (error) {
      console.error(error);
    });
  } //Hero Animations


  var tl = gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].timeline(),
      title = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#hero-text h1", {
    type: "lines",
    linesClass: "slide-child"
  }),
      titleSplit = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#hero-text h1", {
    type: "lines",
    linesClass: "slide"
  }),
      p = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#hero-text p", {
    type: "lines",
    linesClass: "slide-child"
  }),
      pSplit = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#hero-text p", {
    type: "lines",
    linesClass: "slide"
  }),
      lines = title.lines,
      plines = p.lines;
  ;
  tl.from(lines, {
    opacity: 1,
    yPercent: -100,
    duration: .4,
    stagger: .2,
    delay: 0.3
  });
  tl.from(plines, {
    opacity: 1,
    yPercent: -100,
    duration: .2,
    stagger: .1
  });
  $('#scroll-down').on('click', function (e) {
    e.preventDefault();
    var $this = $(this),
        href = $this.attr("href"),
        topY = $(href).offset().top;
    gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].to(window, {
      duration: 1,
      scrollTo: {
        y: topY
      }
    });
  });
  var sd = gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].timeline({
    repeat: -1,
    paused: true
  });
  sd.fromTo('#scroll-down svg', {
    yPercent: -100
  }, {
    yPercent: 150,
    duration: 1
  });
  sd.progress(0.23).pause();
  $('#scroll-down').on('mouseenter', function (e) {
    sd.play();
  });
  $('#scroll-down').on('mouseleave', function (e) {
    sd.progress(0.23).pause();
  }); //About Animations

  tl.fromTo(".img-swipe", {
    xPercent: 0
  }, {
    xPercent: 100,
    duration: 1.3
  });
  gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].fromTo(".fade-left", {
    autoAlpha: 0,
    x: -25
  }, {
    scrollTrigger: {
      trigger: '#about',
      start: "top 60%" // markers: true,

    },
    autoAlpha: 1,
    x: 0,
    duration: 1.5
  }); //Offerings Animations

  var at = gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].timeline({
    scrollTrigger: {
      trigger: '#offerings',
      start: "top 50%" // markers: true,

    }
  });
  var atitle = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#offerings h2", {
    type: "lines",
    linesClass: "slide-child"
  });
  var atitleSplit = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#offerings h2", {
    type: "lines",
    linesClass: "slide-down"
  });
  var ap = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#offerings .subtitle", {
    type: "lines",
    linesClass: "slide-child"
  });
  var apSplit = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#offerings .subtitle", {
    type: "lines",
    linesClass: "slide-down"
  });
  at.from(ap.lines, {
    opacity: 1,
    yPercent: -100,
    duration: .2,
    stagger: .1
  });
  at.from(atitle.lines, {
    opacity: 1,
    yPercent: -100,
    duration: .3,
    stagger: .2
  });
  var aboutBoxes = gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].utils.toArray(".offer-carousel .slide");
  at.from(aboutBoxes, {
    opacity: 1,
    xPercent: -125,
    duration: .75,
    stagger: .2
  }); //Operating Animations

  var op = gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].timeline({
    scrollTrigger: {
      trigger: '#pillars',
      start: "top 60%" // markers: true,

    }
  });
  var optitle = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#pillars h2", {
    type: "lines",
    linesClass: "slide-child"
  });
  var optitleSplit = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#pillars h2", {
    type: "lines",
    linesClass: "slide-down"
  });
  var opp = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#pillars .subtitle", {
    type: "lines",
    linesClass: "slide-child"
  });
  var oppSplit = new gsap_SplitText__WEBPACK_IMPORTED_MODULE_8__["SplitText"]("#pillars .subtitle", {
    type: "lines",
    linesClass: "slide-down"
  });
  op.from(opp.lines, {
    opacity: 1,
    yPercent: -100,
    duration: .2,
    stagger: .1
  });
  op.from(optitle.lines, {
    opacity: 1,
    yPercent: -100,
    duration: .3,
    stagger: .1
  });
  op.fromTo(".img-swipe-pillar", {
    xPercent: 0
  }, {
    xPercent: 100,
    stagger: .3,
    duration: 1.2
  }); //Case Study Animations

  var cs = gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].timeline({
    scrollTrigger: {
      trigger: '.operate-carousel .flickity-buttons',
      endTrigger: '#case-study',
      start: "top 60%" //markers: true,

    }
  });
  cs.from("#case-study .title-container", {
    opacity: 1,
    yPercent: -100,
    duration: .5
  });
  cs.fromTo(".color-swipe-study", {
    xPercent: 0
  }, {
    xPercent: 100,
    stagger: .3,
    duration: 1.5
  }); //Contact Animations

  gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].fromTo(".img-swipe-contact", {
    xPercent: 0
  }, {
    scrollTrigger: {
      trigger: '.study-carousel .flickity-controls',
      endTrigger: '#contact',
      start: "top 60%" // markers: true,

    },
    xPercent: 100,
    duration: 1.3
  });
  gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].fromTo(".form-container", {
    autoAlpha: 0,
    x: -25
  }, {
    scrollTrigger: {
      trigger: '.study-carousel .flickity-controls',
      endTrigger: '#contact',
      start: "top 60%" // markers: true,

    },
    autoAlpha: 1,
    x: 0,
    duration: 1.5
  }); //Nav Animations

  gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].to('#nav', {
    scrollTrigger: {
      trigger: '#hero-text',
      start: "top",
      endTrigger: "html",
      end: "bottom top",
      toggleClass: {
        targets: "#nav",
        className: "active"
      } // markers: true,

    }
  });
  $('#return-top').on('click', function (e) {
    e.preventDefault();
    gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].to(window, {
      duration: 2,
      scrollTo: {
        y: 0
      }
    });
  });
  var navLinks = gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].utils.toArray(".nav-container .nav-link"); //console.log(navLinks);

  navLinks.forEach(function (link, i) {
    link.addEventListener("click", function (e) {
      e.preventDefault();
      gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].to(window, {
        duration: 1,
        scrollTo: {
          y: e.currentTarget.getAttribute("href"),
          offsetY: 100
        }
      });
    });
  });
  gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].utils.toArray(".section").forEach(function (box, i) {
    var id = box.getAttribute("id");
    gsap__WEBPACK_IMPORTED_MODULE_5__["gsap"].to(box, {
      scrollTrigger: {
        trigger: box,
        start: "top 80%",
        end: "bottom 20%",
        // markers: true,
        toggleClass: {
          targets: ".nav-container a[href='#" + id + "']",
          className: "active"
        }
      }
    });
  }); //End Document Ready
});

(function ($, sr) {
  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function debounce(func, threshold, execAsap) {
    var timeout;
    return function debounced() {
      var obj = this,
          args = arguments;

      function delayed() {
        if (!execAsap) func.apply(obj, args);
        timeout = null;
      }

      ;
      if (timeout) clearTimeout(timeout);else if (execAsap) func.apply(obj, args);
      timeout = setTimeout(delayed, threshold || 100);
    };
  }; // smartresize 


  jQuery.fn[sr] = function (fn) {
    return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr);
  };
})(jQuery, 'smartresize');
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! jquery */ "jquery")))

/***/ }),

/***/ "./resources/assets/scripts/particlesjs.json":
/*!***************************************************!*\
  !*** ./resources/assets/scripts/particlesjs.json ***!
  \***************************************************/
/*! exports provided: particles, interactivity, retina_detect, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"particles\":{\"number\":{\"value\":100,\"density\":{\"enable\":true,\"value_area\":300}},\"color\":{\"value\":\"#7a7a7a\"},\"shape\":{\"type\":\"circle\",\"stroke\":{\"width\":0,\"color\":\"#7a7a7a\"},\"polygon\":{\"nb_sides\":5},\"image\":{\"src\":\"img/github.svg\",\"width\":100,\"height\":100}},\"opacity\":{\"value\":0.5,\"random\":false,\"anim\":{\"enable\":false,\"speed\":1,\"opacity_min\":0.1,\"sync\":false}},\"size\":{\"value\":4,\"random\":true,\"anim\":{\"enable\":false,\"speed\":10,\"size_min\":0.1,\"sync\":false}},\"line_linked\":{\"enable\":true,\"distance\":150,\"color\":\"#b5b5b5\",\"opacity\":0.4,\"width\":1},\"move\":{\"enable\":true,\"speed\":3,\"direction\":\"none\",\"random\":false,\"straight\":false,\"out_mode\":\"out\",\"bounce\":false,\"attract\":{\"enable\":false,\"rotateX\":600,\"rotateY\":1200}}},\"interactivity\":{\"detect_on\":\"canvas\",\"events\":{\"onhover\":{\"enable\":false,\"mode\":\"repulse\"},\"onclick\":{\"enable\":false,\"mode\":\"push\"},\"resize\":true},\"modes\":{\"grab\":{\"distance\":400,\"line_linked\":{\"opacity\":1}},\"bubble\":{\"distance\":400,\"size\":40,\"duration\":2,\"opacity\":8,\"speed\":3},\"repulse\":{\"distance\":200,\"duration\":0.4},\"push\":{\"particles_nb\":4},\"remove\":{\"particles_nb\":2}}},\"retina_detect\":true}");

/***/ }),

/***/ "./resources/assets/styles/app.css":
/*!*****************************************!*\
  !*** ./resources/assets/styles/app.css ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),

/***/ 0:
/*!*********************************************************************************!*\
  !*** multi ./resources/assets/scripts/app.js ./resources/assets/styles/app.css ***!
  \*********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! /Users/edward/Desktop/wordpress/archon/wp-content/themes/archon/resources/assets/scripts/app.js */"./resources/assets/scripts/app.js");
module.exports = __webpack_require__(/*! /Users/edward/Desktop/wordpress/archon/wp-content/themes/archon/resources/assets/styles/app.css */"./resources/assets/styles/app.css");


/***/ }),

/***/ "jquery":
/*!**********************************!*\
  !*** external {"this":"jQuery"} ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = this["jQuery"]; }());

/***/ })

},[[0,"/scripts/manifest","/scripts/vendor"]]]);
//# sourceMappingURL=app.js.map