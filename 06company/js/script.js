
// first-slide
var swiper = new Swiper(".first", {
    loop: true,
    navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".h_MenuWrap>ul>li").hover(function(){
    $(this).addClass("on");
},function(){
    $(this).removeClass("on");
})