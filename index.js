var owl = $('.owl-carousel');
owl.owlCarousel({
 loop: true,
 smartSpeed: 80,
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
