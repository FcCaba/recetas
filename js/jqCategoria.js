$(".card").mouseenter(function () { 
    $(this).css("transform", "scale(1.2)");
    $(this).css("z-index", "1");
    $(this).css("heigth", "+100");
});

$(".card").mouseleave(function () { 
    $(this).css("transform", "scale(1.0)");
    $(this).css("z-index", "0");
});
