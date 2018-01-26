$(function(){
    $.ajax({
        type:"get",
         url:"php/getGoodsList.php",
         success:function(data){
            showgoodsList(data);
            var oGoodsDiv = document.getElementsByClassName('goods-item-wrapper');
            // console.log(oGoodsDiv);
            for(var i = 0;i < oGoodsDiv.length;i++){
                oGoodsDiv[i].onclick = function(){
                    // console.log(1)
                    var iId = this.getAttribute('data-id');
                    var oGoods = {
                        id : iId
                    }
        
                    setCookie('goods',JSON.stringify(oGoods),7,'/');
                }
            }
         },
         dataType:'json'
    });

    function showgoodsList(datas){
        let oList = $('.goods-list');
        console.log(datas.length);
        for(let i = 0; i < datas.length; i++){
            let str = `
            <li class="goods-items">
                <div class="goods-s">
                    <span class="${datas[i].goodsType}">${datas[i].beiyong1}</span>
                </div>
                <a href="vans-product.html"><img src="${datas[i].goodsImg}"></a>
                <a class="goods-introduce" href="vans-product.html">${datas[i].goodsDesc}</a>
                <a href="vans-product.html">${datas[i].goodsName}</a>
                <price>￥${datas[i].goodsPrice}.00</price>
                <div class="goods-item-wrapper" data-id="${datas[i].goodsId}">
                    <div class="good-info-main">
                        <div class="goods-s">
                            <span class="${datas[i].goodsType}">${datas[i].beiyong1}</span>
                        </div>
                        <a class="goods-pic" href="vans-product.html"><img src="${datas[i].goodsImg}"></a>
                        <a class="goods-introduce" href="vans-product.html">${datas[i].goodsDesc}</a>
                        <a href="vans-product.html">${datas[i].goodsName}</a>
                        <price>￥${datas[i].goodsPrice}.00</price>
                    </div>
                    <div class="good-select-color">
                        <ul>
                            <li>
                                <a class="goods-pic-one" href="vans-product.html">
                                    <img src=${datas[i].goodsImg}>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </li>
            `
            oList.append(str);
        }
        let str1 = `
        <li class="goods-items">
            <div class="goods-s"></div>
            <a href="javascript:;"><img src="img/vans/8.jpg"></a>
        </li>
        `
        oList.append(str1);
    }
})

$('.has-inner').on('click',function(){
    var x = $('.has-inner').index($(this));
    $('.has-inner .iconfont:eq('+x+')').toggleClass('imove');
    $('.list-inner:eq('+x+')').slideToggle();
})

$('.per').on('click',function(){
    $('.perlist').slideToggle();
})

$('.brand-content-text').hover(function(){
    $('.brand-code').show();
},function(){
    $('.brand-code').hide();
})

$('.limit').focus(function(){
    $('.price-sure').show();
   
});
$('.limit').blur(function(){
    $('.price-sure').hide();
});


// $('.goods-items').hover(function(){
//     var sIndex = $('.goods-items').index($(this));
//     $('.goods-item-wrapper').eq(sIndex).stop().fadeIn();
// },function(){
//     var sIndex = $('.goods-items').index($(this));
//     $('.goods-item-wrapper').eq(sIndex).stop().fadeOut();
// })

$(".goods-list").on("mouseenter",'.goods-items', function () {
    
    var sIndex = $('.goods-items').index($(this));
    $('.goods-item-wrapper').eq(sIndex).stop().fadeIn();
        
});
$(".goods-list").on("mouseleave",'.goods-items', function () {

    var sIndex = $('.goods-items').index($(this));
    $('.goods-item-wrapper').eq(sIndex).stop().fadeOut();
});

// $('.attr').hover(function(){
//     var Index = $('.attr').index($(this));
//     // console.log($('.triangle-top'));
//     $('.triangle-top').eq(Index).show();
//     $('.place-inner-box').eq(Index).show();
// },function(){
//     var Index = $('.attr').index($(this));
//     $('.triangle-top').eq(Index).hide();
//     $('.place-inner-box').eq(Index).hide();
// })

$('.attr').mouseover(function(){
    var Index = $('.attr').index($(this));
    $('.attr').eq(Index).css({fontWeight:'700'});
    $('.icon-jiantouxia').eq(Index+1).css({visibility:'hidden'});
    $('.triangle-top').eq(Index).show();
    $('.place-inner-box').eq(Index).show();
})
$('.attr').mouseout(function(){
    var Index = $('.attr').index($(this));
    $('.attr').eq(Index).css({fontWeight:'100'});
    $('.icon-jiantouxia').eq(Index+1).css({visibility:'visible'});
    $('.triangle-top').eq(Index).hide();
    $('.place-inner-box').eq(Index).hide();
})
$('.place-inner-box').mouseover(function(){
    var aIndex = $('.place-inner-box').index($(this));
    $('.attr').eq(aIndex).css({fontWeight:'700'});
    $('.icon-jiantouxia').eq(aIndex+1).css({visibility:'hidden'});
    $('.triangle-top').eq(aIndex).show();
    $('.place-inner-box').eq(aIndex).show();
})
$('.place-inner-box').mouseout(function(){
    var aIndex = $('.place-inner-box').index($(this));
    $('.attr').eq(aIndex).css({fontWeight:'100'});
    $('.icon-jiantouxia').eq(aIndex+1).css({visibility:'visible'});
    $('.triangle-top').eq(aIndex).hide();
    $('.place-inner-box').eq(aIndex).hide();
})

