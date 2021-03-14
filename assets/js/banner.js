var sickPrimary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 2,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: "cubic-bezier(.84, 0, .08, .99)",
  asNavFor: ".text-slider",
  centerMode: true,
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
};

var sickSecondary = {
  autoplay: true,
  autoplaySpeed: 2400,
  slidesToShow: 1,
  slidesToScroll: 1,
  speed: 1800,
  cssEase: "cubic-bezier(.84, 0, .08, .99)",
  asNavFor: ".image-slider",
  prevArrow: $(".prev"),
  nextArrow: $(".next"),
};

$(".image-slider").slick(sickPrimary);
$(".text-slider").slick(sickSecondary);
