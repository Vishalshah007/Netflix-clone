// For Hamburger menu in mobile devies//

document.getElementById('mobile-menu').addEventListener('click', function () {
    var navList = document.querySelector('.nav-list');
    navList.classList.toggle('active');
});



function video() {
    window.open("https://youtu.be/eRSPKIoe1xo?si=ef5q-lq8cEgVEMF7");
}
function text(){
    window.open("https://en.wikipedia.org/wiki/Devil_in_Ohio");
}

$(".owl-carousel").owlCarousel({
    loop: true,
    margin: 15,
    nav: false,
    dots: false,
    autoplay: true,
    autoplayTimeout: 4000,
    stagePadding: 50,
    responsive: {
        0: {
            items: 1,
        },
        600: {
            items: 2,
        },
        1000: {
            items: 4,
        },
    },
});