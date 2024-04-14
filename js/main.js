$(function () {

    var mixer = mixitup('.directions__list');

    $('.directions__filter-btn').on('click', function () {
        $('.directions__filter-btn').removeClass('directions__filter-btn--active')
        $(this).addClass('directions__filter-btn--active')
    })

    $('.team__slider').slick({
        arrows: false,
        slidesToShow: 4,
        isFinite: true,
        draggable: false,
        waitForAnimate: false,
        responsive:
        [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 3,
                },
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 2,
                },
            },
            {
                breakpoint: 550,
                settings: {
                    slidesToShow: 1,
                    draggable: true,
                },
            },
        ]
    })
    $('.team__slider-prev').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickPrev')
    })
    $('.team__slider-next').on('click', function (e) {
        e.preventDefault()
        $('.team__slider').slick('slickNext')
    })

    $('.testimonials__slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.testimonials__dots'),
        waitForAnimate: false,
        responsive:
        [
            {
                breakpoint: 700,
                settings: {
                    
                },
            },
        ]
    })
    $('.testimonials__prev').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickPrev')
    })
    $('.testimonials__next').on('click', function (e) {
        e.preventDefault()
        $('.testimonials__slider').slick('slickNext')
    })

    $('.program__acc-link').on('click', function (e) {
        e.preventDefault()
        $(this).toggleClass('program__acc-link--active')
        $(this).children('.program__acc-text').slideToggle()
    })


    $(".header__nav-list a, .header__top-btn, footer__go-top").on("click", function (e) {
                //отменяем стандартную обработку нажатия по ссылке
                e.preventDefault();
                //забираем идентификатор бока с атрибута href
                var id  = $(this).attr('href'),
                //узнаем высоту от начала страницы до блока на который ссылается якорь
                    top = $(id).offset().top;
                //анимируем переход на расстояние - top за 1500 мс
                $('body,html').animate({scrollTop: top}, 1200);
            });

    setInterval(() => {
        if ($(window).scrollTop() > 0 && $('.header__top').hasClass('header__top--open') === false) {
            $('.burger').addClass('burger--follow')
        } else {
            $('.burger').removeClass('burger--follow')
            
        }
    }, 0);
    
    $('.burger, .overlay, .header__top a').on('click', function (e){
        e.preventDefault()
        $('.header__top').toggleClass('header__top--open')
        $('.overlay').toggleClass('overlay--show')
    })

    $(document).ready(function() {
        $('.burger').click(function(event) {
            $('.burger').toggleClass('active');
        })
    })

    $('.footer__top-title--slide').on('click', function() {
        $(this).next().slideToggle()
    })
        

})