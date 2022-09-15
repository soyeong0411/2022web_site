$(".fullpage").fullpage({
    navigation:true,
    navigationPosition:"fp-right",
    responsiveWidth:900
})

$(window).scroll(function(){
  let scrollY = window.pageYOffset

  if(scrollY > 500){
    $(".headerWrap").addClass("roll");
  }else{
    $(".headerWrap").removeClass("roll");
  }
})


var swiper = new Swiper(".md_swiper", {
    slidesPerView: 5,
    spaceBetween: 40,
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
