
$(".menubg").hide();
$(".h_MenuWrap>ul").hover(function(){
  $(".h_MenuWrap .submenu").stop().slideDown();
  $(".menubg").stop().slideDown();
    $(this).addClass("on");
},function(){
    $(".menubg,.h_MenuWrap .submenu").stop().hide();
    $(this).removeClass("on");
})

$(window).scroll(function(){
  let scrollY = window.pageYOffset;

  if(scrollY > 500){
     // $(".header").attr("style","position:fixed")
      $(".headerWrap").addClass("fixed");
  }else{
    // $(".header").attr("style","")
      $(".headerWrap").removeClass("fixed");
  }

})



$(".toggle").click(function(){
    $(".h_menuClone").css("left",0)
    $(".m_MenuBg").show()
})

$(".m_MenuBg").click(function(){
    $(".h_menuClone").css("left","-100%")
    $(".m_MenuBg").hide()
})

$(".h_MenuWrap>ul").clone().appendTo(".m_Menu")


$(".m_Menu>ul>li>a").click(function(e){
    e.preventDefault();

    $(".m_Menu>ul>li>a").parent().find(".submenu").stop().slideUp()
    if($(this).hasClass("active")){
        $(".m_Menu>ul>li>a").removeClass("active")
    }else{
        $(this).parent().find(".submenu").stop().slideDown()  // .show
        $(".m_Menu>ul>li>a").removeClass("active")
        $(this).addClass("active")
    }
})


//first-slide
var swiper = new Swiper(".first", {
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});
 


var swiper = new Swiper(".second", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".third", {
  loop: true,
  slidesPerView: 3,
  spaceBetween: 0,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});




var swiper = new Swiper(".m_first", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".m_second", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },pagination: {
    el: ".swiper-pagination",
  },
});
var swiper = new Swiper(".m_third", {
    loop: true,
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },pagination: {
    el: ".swiper-pagination",
  },
});

$(".sub_menu>ul>li").click(function(e){
    e.preventDefault();

  $(".sub_contents>div").hide();     // 있어야 내용이 겹치게 나오지 않고 index값에 맞는 내용이 출력
  $(".sub_contents>div").eq($(this).index()).show();
})


