//fullpage scroll
$(".fullpage").fullpage({
    menu:".mainMenu",
    anchors:["m1st","m2st","m3st","m4st","m5st"],
    navigation:true,
    navigationPosition:"fp-right",
    responsiveWidth:1000,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);

        if(index == 2|| index==4){
            $("#header").addClass("active")

        }else{
            $("#header").removeClass("active")
        }
    }
})

//swiper
var swiper = new Swiper(".m_page2_swiper", {
  loop:true,
  autoplay: {
    delay: 3000,
  }, 
  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper = new Swiper(".page3_swiper", {
    loop:true,
    autoplay: {
      delay: 3000,
    }, 
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });


  var swiper = new Swiper(".page4_swiper", {
    loop:true,
    autoplay: {
      delay: 3000,
    }, 
    effect: 'fade',
    fadeEffect: {
      crossFade: true
    },
    pagination: {
      el: ".swiper-pagination",
      type: "bullets",
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });

  //form
  $("#sdate1,#edate1").datepicker({
    dateFormat: 'yy/mm/dd',
    prevText: '이전 달',
    nextText: '다음 달',
    monthNames: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    monthNamesShort: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
    dayNames: ['일','월','화','수','목','금','토'],
    dayNamesShort: ['일','월','화','수','목','금','토'],
    dayNamesMin: ['일','월','화','수','목','금','토'],
    showMonthAfterYear: true,
    changeMonth: true,
    changeYear: true,
    yearSuffix: '년'
});

//toggle
$(".toggle").click(function(){
  $(".m_menuClone").css("right",0)
  $(".m_menubg").show()
})
$(".m_menubg").click(function(){
  $(".m_menuClone").css("right","-100%")
  $(".m_menubg").hide()
})
$(".out").click(function(){
  $(".m_menuClone").css("right","-100%");
  $(".m_menubg").hide();
})

//menuclone
$(".mainMenu>ul").clone().appendTo(".m_menulist");

//mobile_scroll
$(window).scroll(function(){
  let scrollY = window.pageYOffset;

  if(scrollY > 400){
      $(".headerWrap").addClass("fixed");
  }else{
      $(".headerWrap").removeClass("fixed");
  }
})














// let view = true;
// $(".out").click(function(){
//   if(view == true){
//     $(".outbar1,.outbar2,.outbar3").addClass("active");
//     view = false;
//   }else{
//     $(".outbar1,.outbar2,.outbar3").removeClass("active");
//     $(".m_menuClone").css("right","-100%");
//     $(".m_menubg").hide()
//     view = true;
//   }
// })


