
$(".menubg").hide();
$(".h_MenuWrap>ul>li").hover(function(){
    $(".menubg,.h_MenuWrap .submenu").stop().slideDown();
    $(this).addClass("on");
},function(){
    $(".menubg,.h_MenuWrap .submenu").stop().slideUp();
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


$(".headerMenu>li>a").click(function(e){
    e.preventDefault();

    $(".headerMenu>li>a").parent().find(".submenu").stop().slideUp()
    if($(this).hasClass("active")){
        $(".headerMenu>li>a").removeClass("active")
    }else{
        $(this).parent().find(".submenu").stop().slideDown()  // .show
        $(".headerMenu>li>a").removeClass("active")
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

