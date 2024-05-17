// 스크롤 200px 내릴때부터 내비게이션바 등장
$(window).scroll(function () {
  if ($(this).scrollTop() > 100) {
    $("header").fadeIn("slow");
    $("header").css("display", "block");
  } else {
    $("header").fadeOut("slow");
    $("header").css("display", "none");
  }
});

// 해당 href로 이동
$(document).ready(function () {
  $(".navlist a").click(function (event) {
    event.preventDefault();
    var targetSection = $(this).attr("href");
    var offset = $(targetSection).offset().top - 100;
    $("html, body").animate(
      {
        scrollTop: offset,
      },
      500
    );
  });
});

$(document).ready(function () {
  // 네비게이션 리스트의 초기 상태 설정
  function setNavListVisibility() {
    var screenWidth = $(window).width();
    if (screenWidth < 761) {
      $(".navlist").hide();
    } else {
      $(".navlist").show();
    }
  }

    // 페이지 로드 시 네비게이션 리스트 초기 상태 설정
    setNavListVisibility();

    // 윈도우 크기 변경 시 네비게이션 리스트 상태 업데이트
    $(window).resize(function () {
      setNavListVisibility();
    });

    
  // 햄버거 버튼을 클릭하면 메뉴를 토글
  $(".ham_img").click(function (event) {
    event.stopPropagation();
    $(".navlist").slideToggle();
  });

  // 메뉴 외의 영역을 클릭하면 메뉴를 닫음
  $(document).click(function (event) {
    // 현재 화면 너비를 가져옵니다.
    var screenWidth = $(window).width();
    
    // 화면 너비가 761px 이하인 경우에만 이벤트 핸들러를 실행합니다.
    if (screenWidth <= 761) {
      var target = $(event.target);
      if (!target.closest(".navbar").length) {
        $(".navlist").slideUp();
      }
    }
  });
  // 메뉴 항목을 클릭하면 메뉴를 닫음
  if ($(window).width() < 761) {
    $(".navlist").click(function () {
   
      $(".navlist").slideUp();
    });
  }
});

//포트폴리오 필터
$(document).ready(function () {
  $(".filter_box li[data-filter='*']").addClass("active");
  $(".filter_box li").on("click", function (event) {
    event.stopPropagation(); // 이벤트 버블링 막음
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
  $(".studyfilter_box li").on("click", function (event) {
    event.stopPropagation(); // 이벤트 버블링 막음
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
