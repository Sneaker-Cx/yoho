//客服 关注 手机版

$('.kf').hover(function(){
    $('.hidden_kf').stop().fadeToggle('normal');
},function(){
    $('.hidden_kf').stop().fadeToggle('fast');
})
$('.gz').hover(function(){
    $('.e1').stop().fadeToggle('normal');
},function(){
    $('.e1').stop().fadeToggle('fast');
})
$('.sj').hover(function(){
    $('.e2').stop().fadeToggle('normal');
},function(){
    $('.e2').stop().fadeToggle('fast');
})
//nav 商品导航
var navTimer = null;
$('.nav_list_act').on('mouseenter',function(){
    let x = $('.nav_list_act').index($(this));
    navTimer = setTimeout(function(){
        $('.hiddenList').css('display','none');
        $('.hiddenList:eq('+x+')').css('display','block');
    },200)
    $('.nav_a_act:eq('+x+')').addClass('ahover');

}).on('mouseleave',function(){
    clearTimeout(navTimer);
    $('.hiddenList').css('display','none');
    $('.nav_a_act').removeClass('ahover');
})
//侧边余文乐
$('.side_off').on('click',()=>{
    $('.side_ad').css('display','none');
})
//购物车
$('.gwc').hover(()=>{
    $('.gwc_in').css('display','block');
},()=>{
    $('.gwc_in').css('display','none');
});
$('.gwc_in').hover(()=>{
    $('.gwc_in').css('display','block');
},()=>{
    $('.gwc_in').css('display','none');
});

//input框
var sInput = $('.input_in').val();

$('.input_in').focus(function(){
    // console.log($(this).val());  
    if($(this).val() === sInput){
        $(this).val("");
    }  
})
$('.input_in').blur(function(){
    if($(this).val() === ''){
        $(this).val(sInput);
    }  
   
})