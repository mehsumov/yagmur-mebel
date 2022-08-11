$(document).ready(function () {
  // header sticky
  $(window).scroll(function () {
    let headerHeight = $(".main-header").height() + 60;

    if ($(window).scrollTop() > headerHeight) {
      $(".main-header").addClass("sticky");
    } else {
      $(".main-header").removeClass("sticky");
    }
  });

  //fancybox
  $(".highslide").attr("data-fancybox", "gallery");

  // hamburger menu
  $(".menu-wrapper").click(function (e) {
    e.stopPropagation();
    $(this).toggleClass("opened");
    if ($(this).hasClass("opened")) {
      $("header #myMenu").show();
      $("header #myMenu .navbar-nav").animate({ right: "0" }, 300, "linear");
      $("body").css("overflow-y", "hidden");
    } else {
      $("body").css("overflow-y", "visible");
      $("header #myMenu .navbar-nav").animate(
        { right: "-100%" },
        300,
        "linear"
      );
      setTimeout(function () {
        $("header #myMenu").hide();
      }, 200);
    }
  });

  $("header #myMenu .navbar-nav").click(function (e) {
    e.stopPropagation();
  });

  // when click outside
  $("body").click(function () {
    $("body").css("overflow-y", "visible");
    $("header #myMenu .navbar-nav").animate({ right: "-100%" }, 300, "linear");
    setTimeout(function () {
      $("header #myMenu").hide();
    }, 200);
  });

  // best products carousel
  $(".best-products-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    nav: true,
    navContainer: "#best-products .custom-nav",
    navText: [
      '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" stroke-width="2"><path d="m11.5 20.5-4.73-4.73 4.73-4.77"></path><path d="m25.23 15.77h-17" stroke-linecap="square"></path></g></svg>',
      '<svg viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" width="32" height="32"><g fill="none" stroke-width="2"><path d="m20.5 11 4.73 4.73-4.73 4.77"></path><path d="m23.77 15.77h-17" stroke-linecap="square"></path></g></svg>',
    ],
    margin: 4,
    responsive: {
      0: {
        items: 1,
      },
      768: {
        items: 2,
      },
      992: {
        items: 3,
      },
      1400: {
        items: 4,
      },
    },
  });

  // fav product
  $(".heart").click(function () {
    $(this).toggleClass("fav");
  });

  // categories carousels
  $(".cat-carousel").owlCarousel({
    loop: true,
    dots: false,
    autoplay: false,
    nav: false,
    mouseDrag: false,
    touchDrag: false,
    margin: 24,
    smartSpeed: 2000,
    responsive: {
      0: {
        items: 2,
        mouseDrag: true,
        touchDrag: true,
      },
      576: {
        mouseDrag: false,
        touchDrag: false,
      },
      768: {
        items: 3,
      },
      992: {
        items: 4,
      },
      1400: {
        items: 5,
      },
    },
  });

  let mousewheel = $(".mouse-wheel");
  let owl1 = $(".cat-carousel1");
  let owl2 = $(".cat-carousel2");

  let timestamp_mousewheel = 0; //Define it not in a function should
  mousewheel.on("mousewheel", function (e) {
    let d = new Date();
    if (d.getTime() - timestamp_mousewheel > 1000) {
      //minimum time difference

      timestamp_mousewheel = d.getTime();

      if (e.originalEvent.wheelDelta < 0) {
        owl1.trigger("next.owl");
        owl2.trigger("prev.owl");
      } else {
        owl1.trigger("prev.owl");
        owl2.trigger("next.owl");
      }
      e.preventDefault();
    }
  });

  // active page
  $("#myMenu .nav-link").each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location == link) {
      $(this).parent().addClass("active");
    }
  });

  $(".custom-dropdown-menu .menu-list a").each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location == link) {
      $(this).parent().addClass("active");
      $(this).parents(3).addClass("active");
    }
  });

  $("footer .footer-list a").each(function () {
    let location = window.location.href;
    let link = this.href;
    if (location == link) {
      $(this).parent().addClass("active");
    }
  });

  //open dropdown
  $(".custom-dropdown-menu-wrap .nav-link").click(function () {
    $(this).parent().toggleClass("show");
    $(this).parent().siblings().removeClass("show");
  });

  // products zoom and modal

  $(function () {
    $(".big-image").jqZoom({
      selectorWidth: 30,
      selectorHeight: 30,
      viewerWidth: 450,
      viewerHeight: 450,
    });
  });

  $(".full-content .bullets img").click(function () {
    let thisImg = $(this).attr("src");
    $(".full-content .zoom-box").attr("href", thisImg);
    $(".full-content .big-image").attr("src", thisImg);
    $(".full-content .viewer-box img").attr("src", thisImg);
    $(this).addClass("active").siblings().removeClass("active");
  });

  $(".full-content .bullets img").first().addClass("active");

  $(".swiper-pagination-current").addClass("zero");

  $(".swiper-button-nav").click(function () {
    const number = $(".swiper-pagination-current");
    console.log(number.text().length);
    if (number.text().length !== 2) {
      number.addClass("zero");
    } else {
      number.removeClass("zero");
    }
  });


   let swiper = new Swiper(".news-carousel", {
     slidesPerView: 3,
     slidesPerGroup: 3,
     pagination: {
       el: ".swiper-pagination",
       type: "fraction",
     },
     navigation: {
       nextEl: ".swiper-button-next",
       prevEl: ".swiper-button-prev",
     },
     breakpoints: {
       0: {
         slidesPerView: 1,
         slidesPerGroup: 1,
       },
       576: {
         slidesPerView: 2,
         slidesPerGroup: 2,
       },
       991: {
         slidesPerView: 3,
         slidesPerGroup: 3,
       },
     },
   });
});
