AOS.init({
  offset: 350,
  delay: 0,
  duration: 1000,
});

// Quran Surah Tabs
$(document).ready(function () {
  var surahName = $(".surahName");
  $(surahName).next(".panel").hide();
  $(surahName).on("click", function () {
    $(this).next(".panel").stop(500).slideToggle();
    $(this).toggleClass("active");
  });
});
