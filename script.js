$(".owl-carousel").owlCarousel({
  loop: true,
  margin: 30,
  nav: true,
  autoplay: true, // Avtomatik aylanish
  autoplayTimeout: 2500, // 3000 millisekund (3 sekund) oralig'ida aylanish
  autoplayHoverPause: false, // Hover qilganda to'xtash
  responsive: {
    0: {
      items: 3,
    },
    380: {
      items: 1,
    },
    600: {
      items: 4,
    },
    1000: {
      items: 4,
    },
  },
});
