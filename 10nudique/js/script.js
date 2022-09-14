$(".fullpage").fullpage({
    navigation:true,
    navigationPosition:"fp-right",
    responsiveWidth:900
})


var swiper = new Swiper(".md_swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
