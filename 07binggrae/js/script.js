$(".sec01 .btn-group div").click(function(){
    let $selector = $(this).attr("data-filter");
    
    $(".sec01 .sec01_item").isotope({
        filter:$selector
    })
})