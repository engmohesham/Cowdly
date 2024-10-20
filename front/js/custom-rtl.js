$(function () {
  "use strict";
  $("#portfolio .c-link").on("click", function () {
    $(this)
      .children("span")
      .text(
        "عرض المزيد" == $(this).children("span").text()
          ? "عرض أقل"
          : "عرض المزيد"
      ),
      $("#portfolio .row > div:nth-child(n+7").slideToggle();
  }),
    $("#related-works .c-link").on("click", function () {
      $(this)
        .children("span")
        .text(
          "عرض المزيد" == $(this).children("span").text()
            ? "عرض أقل"
            : "عرض المزيد"
        ),
        $("#related-works .row > div:nth-child(n+7").slideToggle();
    });
});

window.addEventListener("scroll", function () {
  const element = document.getElementById("fixed-nav");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 20) {
    element.classList.add("fixed-nav");
  } else {
    element.classList.remove("fixed-nav");
  }
});
