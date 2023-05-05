var swiper = new Swiper('.mySwiper', {
  spaceBetween: 30,
      centeredSlides: true,
      autoplay: {
        delay: 2500,
        disableOnInteraction: false,
  },
  navigation: {
    nextEl: '.hero-btn-slider-next',
    prevEl: '.hero-btn-slider-prev',
  },
  pagination: {
    el: '.hero-swiper-pagination',
    type: 'fraction',

    renderFraction: function (currentClass, totalClass) {
      const line = '&nbsp;&#9135;&#9135;&#9135;&#9135;&#9135;&nbsp;';
      return `0<span class="${currentClass}"></span> ${line} 0<span class="${totalClass}"></span>`;
    },
  },
  keyboard: {
    enabled: true,
    onlyInViewport: true,
    pageUpDown: true,
  },
  loop: true,
});