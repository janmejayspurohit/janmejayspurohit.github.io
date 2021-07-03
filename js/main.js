(function ($) {
  "use strict";
  $(window).on("load", function () {
    $("#preloader").fadeOut();
    if ($(window).scrollTop() > 200) {
      $(".scrolling-navbar").addClass("top-nav-collapse");
    } else {
      $(".scrolling-navbar").removeClass("top-nav-collapse");
    }

    // Sticky Nav
    $(window).on("scroll", function () {
      if ($(window).scrollTop() > 100) {
        $(".scrolling-navbar").addClass("top-nav-collapse");
      } else {
        $(".scrolling-navbar").removeClass("top-nav-collapse");
      }
    });

    $(window).on("beforeunload", function () {
      window.scrollTo(0, 0);
    });

    /* slicknav mobile menu active  */
    var mobileMenu = $(".mobile-menu");
    mobileMenu.slicknav({
      closeOnClick: true,
      prependTo: ".navbar-header",
      parentTag: "liner",
      easingOpen: "swing",
      easingClose: "swing",
      allowParentLinks: true,
      duplicate: true,
      label: "",
    });

    $("html").on("click", (event) => {
      if ($(".slicknav_menu").has(event.target).length === 0) mobileMenu.slicknav("close");
    });

    window.onscroll = () => {
      if ($(".slicknav_menu").has(event.target).length === 0) mobileMenu.slicknav("close");
    };

    /* WOW Scroll Spy*/
    var wow = new WOW({
      //disabled for mobile
      mobile: true,
    });
    wow.init();

    // one page navigation
    $(".navbar .navbar-nav").onePageNav({
      currentClass: "active",
      scrollSpeed: 200,
      scrollThreshold: 0.6,
    });

    /* Back Top Link active*/
    var offset = 200;
    $(window).scroll(function () {
      if ($(this).scrollTop() > offset) {
        $(".back-to-top").fadeIn(400);
      } else {
        $(".back-to-top").fadeOut(400);
      }
    });
    $(".back-to-top").on("click", function (event) {
      event.preventDefault();
      $("html, body").animate(
        {
          scrollTop: 0,
        },
        600
      );
      return false;
    });
  });

  document.body.addEventListener("contextmenu", (event) => {
    event.preventDefault();
  });

  document.body.addEventListener("keydown", (event) => {
    if (event.ctrlKey && "cvxspwuaz".indexOf(event.key) !== -1) {
      event.preventDefault();
    }
  });

  function getAge(dateArray = []) {
    const decoder = new TextDecoder();
    let dateString = decoder.decode(dateArray);
    let today = new Date();
    let birthDate = new Date(dateString);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
  const myAge = getAge(new Uint8Array([49, 57, 57, 55, 45, 49, 48, 45, 50, 57]));
  $("#basicage").prepend(`Age: ${myAge}<br>`);
})(jQuery);
