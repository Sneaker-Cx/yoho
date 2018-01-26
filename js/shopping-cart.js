// 温馨提示
$('.tipsbox a').click(function(){
    $('.tipsbox').fadeOut();
})
// 为您优选 最近浏览
$('.moreandmore-title span').click(function(){
    $('.moreandmore-title span').removeClass('selects');
    $(this).addClass('selects');
    $('.moreandmore-content ul').css('display','none');
    var x = $('.moreandmore-title span').index($(this));
    $('.moreandmore-content ul:eq('+x+')').slideDown();
})  

$('.select-all').click(function() {
    if(this.checked){
        $("[type='checkbox']").attr("checked",'true');
    }else{
     $("[type='checkbox']").removeAttr("checked");
    }    
})
//checked
var itotal = 0.00;
var icount = 1;
$('.jia').click(function(){
    icount++;
    $('.itemscount').html(icount);
});
$('.jian').click(function(){
    icount--;
    if(icount<1){
        icount = 1;
    }
    $('.itemscount').html(icount);
});
$('.table-items-counti').click(function(){
    $('.table-items-price span').html((icount*3799)+'.00');
})

$('.dogs').on('change',function(){
    // console.log(0);
    if($(this).is(':checked')){
        $('.dogs').prop('checked','checked');
        $('.gotopay').removeClass('disable');
        $('.table-items-counti').click(function(){
            $('.table-items-price span').html((icount*3799)+'.00');
            $('.total-price span').html($('.table-items-price span').html());
        })
        $('.total-price span').html($('.table-items-price span').html());
    }else{
        $('.dogs').removeProp('checked');
        $('.table-items-counti').click(function(){
            $('.table-items-price span').html((icount*3799)+'.00');
            $('.total-price span').html('0.00');
        })
        $('.total-price span').html('0.00');
        $('.gotopay').addClass('disable');
    }
})

// $('.jia').click(function(){
//     let index = $('.jia').index($(this));
//     let number = $('.itemscount').eq(index).val();
//     var num = $(this).siblings('.add');
//     let price =  $('.table-items-price span').eq(index).text();
//     console.log(price);
//     number++;
//     total = price * number;
//     num.val(parseInt(num.val())+1);
//     $('.subtotal').eq(index).text('￥'+ total.toFixed(2));
//     $('.total_num').text(total.toFixed(2));
//     $('.choose_num').text(number);
// })