var owl = $('.owl-carousel');
owl.owlCarousel({
  loop: false,
  smartSpeed: 80,
  slideTransition: 'linear',
  responsiveBaseElement: 'body',
  margin: 20,
  responsive: {
    0: {
      items: 1
    },
    600: {
      items: 1
    },
    960: {
      items: 3
    },
    1200: {
      items: 4
    }
  }
});
