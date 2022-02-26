var $horizontal = $('.movingDiv');
$(window).scroll(function () {
    console.log(this);
    var s = $(this).scrollTop(),
        d = $(document).height(),
        c = $(this).height();

    scrollPercent = (s / (d - c));

    var position = (scrollPercent * ($(document).width()/2 - $horizontal.width()));
    //var position = (scrollPercent * ($(document).width()/2 - $horizontal2.width()));
    
    

    $horizontal.css({
        'left': position
    });
    
    $horizontal2.css({
        'right': position
    });
  
    if(s>400){
$heart.css({
 'OPACITY': '1'
})

    } 
           if(s<400){
$heart.css({
 'opacity': '1'
})
    }

});