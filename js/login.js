
$('.login-er').hover(function(){

    $('.login-er img:eq(0)').stop().animate({left:6},'fast',function(){
        $('.login-er img:eq(1)').fadeIn();
    });    
},function(){
    $('.login-er img:eq(0)').stop().animate({left:67});
    $('.login-er img:eq(1)').css('display','none');
})
$('.login-byNumber-h span').click(function(){
    $('.login-byNumber-h ul').slideToggle();
});
$('.login-byNumber-h ul').click(function(){
    $('.login-byNumber-h ul').slideToggle();
})


$('.change-login').click(function(){
    $('.login-needC').toggleClass('login-change');
})

$('.login-check a').click(function(){
    $('.login-check a').removeClass('chosenStyle');
    $(this).addClass('chosenStyle');
    $('.inputs').toggleClass('login-change');
})


function iRotate(obj){
    var value2 = 0
    obj.rotate({ 
        
        bind: 
          { 
             click: function(){
                 value2 +=90;
                 $(this).rotate({ animateTo:value2})
             }
          } 
        
     });
}
iRotate($(".vcodeimg"));
iRotate($(".vcodeimg1"));
iRotate($(".vcodeimg2"));
iRotate($(".vcodeimg3"));
