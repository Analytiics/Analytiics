var owl = $('.owl-carousel');
owl.owlCarousel({
 loop: true,
 smartSpeed: 80,
 responsive: {
  0: {
   items: 1
  },
  600: {
   items: 2
  },
  1000: {
   items: 4
  }
 }
});
