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


 //用户名是否存在
 var usernameExists = true;
 $(function () {
    
     //用户名存在性验证
     $("#txtusername").blur(function () {
         // console.log($('#txtusername').val())
         $("#txtusername").css({outline:'none'});
             $.ajax({
                 url:"php/usercheck.php",
                 method:"get",
                 data:{"username":$("#txtusername").val()},
                 success:function (data) {
                     if($('#txtusername').val() === ''){
                         $('#usernameMsg').html("");
                     }else{
                         if(data=="0"){
                             usernameExists = false;
                         $("#usernameMsg").html("该用户名可用");
                         }else{
                             usernameExists = true;
                         $("#usernameMsg").html("该用户名已存在");
                         }
                     }    
                 }
             });
         });

     $("#f").submit(function () {
         if(usernameExists){
             alert("亲，用户名已经存在");
             return false;//阻止浏览器的默认行为。
         }
     });

 });
 
var phoneTest = /^((1[3,5,8][0-9])|(14[5,7])|(17[0,6,7,8])|(19[7]))\d{8}$/;
var pwsTest   = /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/;

var oPhonetest = document.getElementsByClassName('phoneTest')[0],
    oVcodetest = document.getElementsByClassName('vcodeTest')[0],
    oPwdTest   = document.getElementsByClassName('pwdTest')[0];
var numbertest = 0;
var iVcodetest = oVcodetest.value;
oPhonetest.oninput = oVcodetest.onpropertychange = function(){
    if(phoneTest.test(oPhonetest.value)){
        oPhonetest.style.border = '1px solid green';
    }else{
        oPhonetest.style.border = '1px solid red';
        $('.registerNow').removeClass('goOk');
        numbertest--;
    }
    gogogo();
}


oVcodetest.oninput = oVcodetest.onpropertychange = function(){
    console.log(oVcodetest.value);
    if(oVcodetest.value == 1234){
        oVcodetest.style.border = '1px solid green';
    }else{
        oVcodetest.style.border = '1px solid red';
        $('.registerNow').removeClass('goOk');
        numbertest--;
    }
    gogogo();
}
oPwdTest.oninput = oPwdTest.onpropertychange=function(){
    if(pwsTest.test(oPwdTest.value)){
        oPwdTest.style.border = '1px solid green';
        $('.pwdsdiv').css('display','none');
    }else{
        numbertest--;   
        oPwdTest.style.border = '1px solid red';
        numbertest = 1;
        $('.pwdsdiv').css('display','block');
       
    }
    gogogo();
    
}
function  gogogo(){
    if(phoneTest.test(oPhonetest.value)&&oVcodetest.value == 1234 &&pwsTest.test(oPwdTest.value)){
        $('.registerNow').addClass('goOk');
    }else{
        $('.registerNow').removeClass('goOk');
    }
}

$('.get-message').click(function(){
    $(this).css({background:'#ccc'});
    var iTime = 5;
    $('.get-message').html(iTime +'S');
    var iTemp = setInterval(function(){
        iTime--;
        $('.get-message').html(iTime +'S');
        if(iTime <= 0 ){
           clearInterval(iTemp);
           $('.get-message').css({background:'#ff1901'});
           $('.get-message').html('重新获取验证码');
           $('.vcodeTest').val(1234);
        }
    },1000)
    
})