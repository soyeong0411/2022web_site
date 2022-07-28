
$(".menubg").hide();
$(".h_MenuWrap>ul>li").hover(function(){
    $(".menubg").stop().slideDown();
    $(".h_MenuWrap .submenu").stop().delay(100).slideDown();
    $(this).addClass("on");
},function(){
    $(".menubg,.h_MenuWrap .submenu").stop().hide();
    $(this).removeClass("on");
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


