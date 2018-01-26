//主页轮播图2（无缝滚动）
var oslideBrand = document.getElementsByClassName('slide-brand')[0],
    oSbbL = document.getElementsByClassName('s-b-btnL')[0],
    oSbbR = document.getElementsByClassName('s-b-btnR')[0],
    oSbList = document.getElementsByClassName('s-b-list')[0];
var iSbIndex = 0;var iSbTimer = null;
const PER_WIDTH = 1158;

//自动运行
autoMoves();
function autoMoves(){
    iSbTimer = setInterval(function(){
        rightMoves();
    },3000);
}

//本身的向右运动的规律
function rightMoves(){
    iSbIndex ++;
    if(iSbIndex>=4){
        oSbList.style.left = 0;
        iSbIndex = 1;
    }
    var iLEFT = -iSbIndex * PER_WIDTH;
    $('.s-b-list').stop().animate({'left':iLEFT},500);
}
//鼠标进入停止
$('.slide-brand').hover(function(){
    $('.s-b-b').fadeIn('fast');
    clearInterval(iSbTimer);
},function(){
    $('.s-b-b').fadeOut('fast');
    autoMoves();
})

//左键 右键
$('.s-b-btnR').click(function(){
    rightMoves();
});

$('.s-b-btnL').click(function(){
    iSbIndex--;
    if(iSbIndex < 0) {

        oSbList.style.left = -3 * PER_WIDTH + 'px';

        iSbIndex = 2;
    }
    console.log(iSbIndex);
    var iLEFT = -iSbIndex * PER_WIDTH;
    $('.s-b-list').stop().animate({'left':iLEFT},500);
});