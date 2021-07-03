(function ($) {
  "use strict";
  var owl = $(".owl-carousel");
  owl.owlCarousel({
    loop: true,
    slideTransition: "linear",
    margin: 10,
    responsive: {
      0: {
        items: 1,
        loop: false,
      },
      600: {
        items: 3,
        loop: false,
      },
      1000: {
        items: 5,
        loop: false,
      },
    },
  });
  owl.on("mousewheel", ".owl-stage", function (e) {
    if (e.deltaX != 0) {
      e.preventDefault();
      if (e.deltaX > 0) {
        owl.trigger("next.owl");
      } else {
        owl.trigger("prev.owl");
      }
    }
  });
})(jQuery);
