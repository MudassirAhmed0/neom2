$(".slider-for").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  infinite: false,
  fade: true,
  asNavFor: ".slider-nav",
});
$(".slider-nav").slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  asNavFor: ".slider-for",
  dots: false,
  arrows: false,
  infinite: false,
  centerMode: true,
  focusOnSelect: true,
});