//主页轮播图1（opacity）
var iTimer = null;
var nStop  = 0;
var x = 1;
function autoMove(ns){
    // var x = 1;
    if(ns){
        x = ns+1;
        if(x>7){
            x=0;
        }
    }
    iTimer = setInterval(function(){
        $('.slide-wrapper-items').fadeOut();
        $('.slide-wrapper-items:eq('+x+')').fadeIn();
        $('.thumb-pagination-items').eq(x).find('a').addClass('focus').parent().siblings().find('a').removeClass('focus');
        x ++;
        if(x > 7){
            x = 0;
        }
    },3000)
}
autoMove();

$('.thumb-pagination-items').on('mouseenter',function(){
    nStop = $('.thumb-pagination-items').index(($(this)));
    // console.log(nStop);
    $('.slide-wrapper-items').fadeOut();
    $('.thumb-pagination-items').eq(nStop).find('a').addClass('focus').parent().siblings().find('a').removeClass('focus');
    $('.slide-wrapper-items:eq('+nStop+')').fadeIn();
    clearInterval(iTimer);
}).on('mouseleave',function(){
    autoMove(nStop);
});

$('.slide-wrapper').hover(function(){
    clearInterval(iTimer);
},function(){
    autoMove();
})
    
$('.icon-fanhui5').click(function(){
    x --;
    if(x < 0){
        x = 7;
    }
    $('.slide-wrapper-items').fadeOut();
    $('.slide-wrapper-items').eq(x-1).fadeIn();
    $('.thumb-pagination-items').eq(x-1).find('a').addClass('focus').parent().siblings().find('a').removeClass('focus'); 
})

$('.icon-fanhui6').click(function(){
    x ++;
    if(x > 7){
        x = 0;
    }
    $('.slide-wrapper-items').fadeOut();
    $('.slide-wrapper-items').eq(x-1).fadeIn();
    $('.thumb-pagination-items').eq(x-1).find('a').addClass('focus').parent().siblings().find('a').removeClass('focus'); 
})

//回到顶部
window.onscroll=function(){

    var nScroll   = document.body.scrollTop ||document.documentElement.scrollTop;
    // console.log(nScroll);
    if(nScroll > 0){
        $('.side').fadeIn();
    }else{
        $('.side').fadeOut();
    }
}

var iBackTimer = null;
$('.side2').click(function(){
    cancelAnimationFrame(iBackTimer);
    iBackTimer = requestAnimationFrame(function fn(){
    var oTop = document.body.scrollTop || document.documentElement.scrollTop;
   
    if(oTop > 0){
      document.body.scrollTop = document.documentElement.scrollTop = oTop - 180;
        iBackTimer = requestAnimationFrame(fn);
    }else{
        cancelAnimationFrame(iBackTimer);
    } 
    })
})