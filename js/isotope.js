
//포트폴리오 필터
$(document).ready(function () {
  $(".filter_box li[data-filter='*']").addClass("active");
  $(".filter_box li").on("click", function () {
    $(".filter_box li").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $(".portfolio_item").hide();
    if (filterValue === "*") {
      $(".portfolio_item").show();
    } else {
      $(filterValue).show();
    }
  });
});

//STUDY 필터
$(document).ready(function () {
  $(".studyfilter_box li[data-filter='*']").addClass("active");
  $(".studyfilter_box li").on("click", function () {
    $(".studyfilter_box li").removeClass("active");
    $(this).addClass("active");
    var filterValue = $(this).attr("data-filter");
    $(".study_item").hide();
    if (filterValue === "*") {
      $(".study_item").show();
    } else {
      $(filterValue).show();
    }
  });
});
