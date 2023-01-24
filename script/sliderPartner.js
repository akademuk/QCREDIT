$(document).ready(function(){
    $('.partnerSlider').slick({
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        dots: false,
        arrows: false,
        autoplay:true,
        autoplaySpeed:1500,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToScroll: 1,
                    slidesToShow: 2,
                }
            },
        ]
    });
});