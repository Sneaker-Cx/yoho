
$(function(){
    // console.log(1)
    var sGoods = getCookie('goods');
    var aGoods = JSON.parse(sGoods);
    $.ajax({
        type:"get",
         url:"php/getGoodsInfo.php",
         data:{'goodsId':aGoods.id},
         success:function(data){
            getgoodInfo(data);
            fangda();
            cm();
            jiajian();
         },
         dataType:'json'
    });

    function getgoodInfo(datas){
        let aList = $('.main-right');
            let str = `
            <h1>
                ${datas.goodsDesc}
            </h1>
            <div class="line"></div>
            <span style="display: block;margin-bottom: 18px;">
                <span style="font-size: 14px;">吊牌价：</span>
                <span style="font-size: 20px; font-weight:bold;">￥${datas.goodsPrice}.00</span>
            </span>
            <div class="main-inner">
                <span style="margin-right: 18px; float:left;">促销：</span>
                <ul style="display: inline-block" class="jjg">
                    <li><span class="ac-type">赠品</span>全场满¥399赠新年利是封</li>
                    <li><span class="ac-type">加价购</span>全场任意消费加5元换购YOHO!当期热销新刊</li>
                </ul>
            </div>
            <div class="line"></div>
            <div class="main-inner2">
                <span>促&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;销：</span>
                <a class="product-color" href="javascript:;"> 
                    <img class="product-pic" src="${datas.beiyong3}">
                    <span>黑色</span>
                </a><br>
                <span>尺&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;码：</span>
                    <a class="cm" href="javascript:;">XS</a>
                    <a class="cm" href="javascript:;">S</a>
                    <a class="cm" href="javascript:;">M</a>
                    <a class="cm" href="javascript:;">L</a>
                    <a class="cm" href="javascript:;">XL</a><br>
                <div class="size-box" style="float:none">
                    <p class="size">150-76A／胸围 100cm／肩宽 38cm</p>
                    <p class="size">155-80A／胸围 104cm／肩宽 39cm</p>
                    <p class="size">160-84A／胸围 108cm／肩宽 40cm</p>
                    <p class="size">165-88A／胸围 114cm／肩宽 41cm</p>
                    <p class="size">170-92A／胸围 120cm／肩宽 43cm</p>
                </div>
                <span>数&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;量：</span>
                <a class="minus" href="javascript:;">-</a>
                <span class="cm1" style="display:inline-block;margin-right:0;">1</span>
                <a class="add" href="javascript:;">+</a>
            </div>
            <div class="line"></div>
            <div class="main-inner3">
                <a href="shopping-cart.html" style="display: inline-block;
                margin-right: 10px;
                margin-bottom: 15px;
                height: 46px;
                line-height: 46px;
                width: 180px;
                text-align: center;
                color: #fff;
                background: #d0021b;
                font-size: 16px;"
                class="gotocart" 
                ><i class="iconfont icon-gouwuche"></i> 加入购物车</a><span style="display: inline-block;
                width: 140px;
                height: 46px;line-height: 46px;
                text-align: center;
                margin-bottom: 15px;
                background: #fff;
                color: #222;
                border: 1px solid #ccc;
                box-sizing: border-box;
                font-size: 16px;"><i class="iconfont icon-20151209tubiaolianxizhuanhuan22" style="color:#ccc;"></i> 收藏商品</span><br>
                <span style="display: block;
                text-align: center;
                line-height: 42px;
                margin-top: 5px;
                margin-bottom: 15px;
                background: #fff;
                color: #222;
                border: 1px solid #e6e6e6;width:179px;
                font-size: 14px;overflow:hidden;"><img src="img/er1.png" style="width:82px;float:left;">   手机客户端<br>扫一扫购买</span>
            </div>
            `
            aList.append(str);

            let zList =  $('.main-box');
             let str3 = `
             <div class="main-magnifier">
                <img src="${datas.beiyong2}"  >
            </div>
            <div class="main-left">
                <div class="main-middle">
                    <img src="${datas.beiyong3}" alt="">
                    <span class="shadow"></span>
                </div>
                <div class="share">
                    <span>分享：</span>
                    <span class="shareto"></span>
                </div>
            </div>
            <div class="main-center">
                <div class="main-center-items">
                    <img src="${datas.beiyong3}">
                </div>
            </div>
             `
             zList.append(str3);
    }    
})


function cm(){
    $('.cm').click(function(){
        var sIndex = $('.cm').index(this);
        console.log(sIndex)
        $('.cm').eq(sIndex).css({background:'#000',color:'#fff'}).siblings().css({background:'',color:''});
        $('.size').eq(sIndex).show().siblings().hide();
    })
}
function jiajian(){
    var oNum =  Number($('.cm1').text());
    if(oNum ===1 ){
        $('.minus').css({color:'#999'})
    }
    $('.add').click(function(){
        // console.log($('.cm1').text())
        oNum++;
        // console.log(oNum)
        if(oNum >= 5){
            oNum = 5;
            $('.add').css({color:'#999'})
        }else{
            $('.add').css({color:'#000'})
            $('.minus').css({color:'#000'})
        }
        $('.cm1').text(oNum);
    })
    $('.minus').click(function(){
        oNum--;
        if(oNum <= 1){
            oNum = 1;
            $('.minus').css({color:'#999'})
            
        }else{
            $('.minus').css({color:'#000'})
            $('.add').css({color:'#000'})
        }
        $('.cm1').text(oNum);
    })
}

function fangda(){
    // console.log(1);
    //放大镜效果
    var shadowWidth = $('.shadow').width(),//阴影的宽度  
        shadowHeight = $('.shadow').height(),//阴影的高度  
        middleWidth = $('.main-middle').width(),//容器的宽度  
        middleHeight = $('.main-middle').height(),//容器的高度  
        bigWidth = $('.main-magnifier').width(),//放大图片盒子的宽度  
        bigHeight = $('.main-magnifier').height(),//放大图片盒子的高度  
        rateX = bigWidth / shadowWidth,//放大区和遮罩层的宽度比例  
        rateY = bigHeight / shadowHeight;//放大区和遮罩层的高度比例  

    //当鼠标移入与移出时阴影与放大去显/消失  
    $('.main-middle').hover(function() {  
        $('.shadow').show();  
        $('.main-magnifier').show();  
    }, function() {  
        $('.shadow').hide();  
        $('.main-magnifier').hide();  
    }).mousemove(function(e) {//当鼠标移动时，阴影和放大区图片进行移动  

        //记录下光标距离页面的距离  
        var x = e.pageX,  
            y = e.pageY;  

        //设置遮罩层的位置  
        $('.shadow').offset({  
            top: y - shadowHeight / 2,  
            left: x - shadowWidth / 2  
        });       

        //获取遮罩层相对父元素的位置  
        var cur = $('.shadow').position(),  
            _top = cur.top,  
            _left = cur.left,  
            hdiffer = middleHeight - shadowHeight,  
            wdiffer = middleWidth - shadowWidth;  

        if(_top < 0) {
            _top = 0;
        }  else if(_top > hdiffer) {
            _top = hdiffer;
        }  
        if(_left < 0) {
            _left = 0;
        }  else if(_left > wdiffer) {
            _left = wdiffer;
        }  

        //判断完成后设置遮罩层的范围  
        $('.shadow').css({  
            top: _top,  
            left: _left  
        });  

        //设置放大区图片移动  
        $('.main-magnifier img').css({  
            top: - rateY * _top,  
            left: - rateX * _left  
        });
    });
}
         
    //评价切换
    $('.judge-title').click(function(){
        
        var oIndex = $('.judge-title').index($(this));
        // console.log(oIndex);
        $('.judge-title').eq(oIndex).addClass('judge-active').siblings().removeClass('judge-active');
        $('.judge-list').eq(oIndex).show().siblings().hide();
    })

    //滑动咨询
    $(".slide_box").on("mouseenter","li",function(){
        $(".slide_box li .slide_pic").eq($(this).index()).stop(true).animate({top:-163},250),
        $(".slide_news_box span").eq($(this).index()).css({background:"#000",color:"#fff"})
    });
    $(".slide_box").on("mouseleave","li",function(){
        $(".slide_box li .slide_pic").eq($(this).index()).stop(true).animate({top:0},250),
        $(".slide_news_box span").eq($(this).index()).css({background:"#fff",color:"#000"})
    });