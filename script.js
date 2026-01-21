const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    //   loop: true,
    speed: 550,

    // If we need pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    spaceBetween: 100,
    loop: true,
    // Navigation arrows
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    keyboard: {
        enabled: true,
        onlyInViewport: false,
    },
    // And if we need scrollbar
    //   scrollbar: {
    //     el: '.swiper-scrollbar',
    //   },
});

swiper.slideTo(1, 0, false);
	

setInterval(() => swiper.slideNext(), 5000);