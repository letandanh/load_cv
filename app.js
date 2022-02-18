let menu = document.querySelector('#menu-btn');
let navbar = document.querySelector('.navbar .menu');

menu.onclick = () => {
    menu.classList.toggle('fa-times');
    navbar.classList.toggle('active');
}
window.onscroll = () => {
    navbar.classList.remove('active');
    menu.classList.remove('fa-times');
}


$(document).ready(function() {

    $(window).scroll(function() {

        if (this.scrollY >= 200) {
            $('.navbar').addClass('navbarscroll');
            $('.logo a').addClass('changeLogo');
        } else {
            $('.navbar').removeClass('navbarscroll')
            $('.logo a').removeClass('changeLogo');
        }

        // Scrolling Button Btn
        if (this.scrollY >= 450) {
            $('.scroll-up-btn').addClass("show");
        } else {
            $('.scroll-up-btn').removeClass("show");
        }
    });

    //slide-up script
    $('.scroll-up-btn').click(function() {
        $('html').animate({ scrollTop: 0 });
    });
    //click readmore
    $(document).ready(function() {
        $(".readmore").click(function() {
            $(".skills p").addClass(".skills p.active");
        });
    });

    var typed = new Typed(".typing-1", {
        strings: [
            "Developer", "Blogger",
            "Designer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });
    var typed = new Typed(".typing-2", {
        strings: [
            "Developer", "Blogger",
            "Designer"
        ],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });


    // owl carousel animation
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        navigation: true,
        autoplay: true,
        autoplayTimeOut: 1000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1,
                nav: false
            },
            600: {
                items: 2,
                nav: false
            },
            1000: {
                items: 3,
                nav: false
            }
        }
    });


});