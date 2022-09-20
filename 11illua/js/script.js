$(".fullpage").fullpage({
    menu:".mainMenu",
    anchors:["m1st","m2st","m3st","m4st","m5st"],
    navigation:true,
    navigationPosition:"fp-right",
    responsiveWidth:900,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);

        if(index == 2){
            $("#header").addClass("active")
        }else{
            $("#header").removeClass("active")
        }

       
    }
})

var swiper = new Swiper(".page3_swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  var swiper = new Swiper(".page4_swiper", {
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

