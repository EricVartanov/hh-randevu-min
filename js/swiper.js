const swiper1 = new Swiper(".idc-swiper", {
    // Default parameters
    autoplay: {
        delay: 3000,
    },
    loop: true,
    direction: "horizontal",
    slidesPerView: "auto",
    spaceBetween: 0,
    watchSlidesVisibility: true,
    watchSlidesProgress: true,
    touchReleaseOnEdges: true,
    allowTouchMove: true,
    watchOverflow: true,
    grabCursor: true,
    pagination: {
        el: ".idc-swiper-pagination",
        type: "bullets",
    },
});
