var owl = $('.owl-carousel');
owl.owlCarousel({
 loop: false,
 smartSpeed: 80,
 slideTransition: 'linear',
 responsiveBaseElement: 'body',
 responsive: {
  0: {
   items: 1
  },
  600: {
   items: 1
  },
  960: {
   items: 2
  },
  1200: {
   items: 3
  }
 }
});
