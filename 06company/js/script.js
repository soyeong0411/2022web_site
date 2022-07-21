
$(".menubg").hide();
$(".h_MenuWrap>ul>li").hover(function(){
    $(".menubg,.submenu").stop().slideDown();
    $(this).addClass("on");
},function(){
    $(".menubg,.submenu").stop().slideUp();
    $(this).removeClass("on");
})








// // first-slide
// var swiper = new Swiper(".first", {
//     loop: true,
//     navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },
// });

