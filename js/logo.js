$('.slide-logo-arrow').on('click',()=>{
    $('.logo-show').fadeOut(500,function(){
        $('.logo-hidden').fadeIn(500,function(){
            
        });
    });
    setTimeout(function(){
        $('.s-logo').each(function(k,v){
            if($($('.s-logo')[k]).css('display') == 'none'){
                $(this).removeClass('logo-show').addClass('logo-hidden');
            }else if($($('.s-logo')[k]).css('display') == 'list-item'){
                $(this).removeClass('logo-hidden').addClass('logo-show');
            }
        })
    },1000);   
}) 