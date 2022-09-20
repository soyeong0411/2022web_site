$("#fullpage").fullpage({
    menu:".navTop",
    anchors:["m1st","m2st","m3st","m4st"],
    navigation:true,
    navigationPosition:"fp-right",
    navigationTooltips:["first","second","third","forth"],
    responsiveWidth:900,
    afterLoad:function(anchorslink,index){
        console.log(anchorslink,index);
    }

})