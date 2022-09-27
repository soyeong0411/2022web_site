$(".fullpage").fullpage({
    menu:".mainMenu",
    anchors:["m1st","m2st","m3st","m4st","m5st"],
    navigation:true,
    navigationPosition:"fp-right",
    responsiveWidth:900,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);

        if(index == 2|| index==4){
            $("#header").addClass("active")
        }else{
            $("#header").removeClass("active")
        }

        // if(index == 4){
        //   $("#header").addClass("active")
        // }else{
        //   $("#header").removeClass("active")
        // }

    }
})

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