//跨域拿数据
var oF1      = document.getElementsByClassName('input_in')[0];
var oDefault = oF1.value;
var oF1List  = document.getElementById('hot_search');


oF1.oninput = oF1.onpropertychange = function(){
    oF1List.style.display = 'block';
    var sValue = this.value;
    oF1List.innerHTML = '';
    if(sValue !== ''){
        var oScript = document.createElement('script');
        oScript.src='https://search.yohobuy.com/product/search/suggest?callback=callback&return_type=jsonp&keyword='+sValue+'&_=1512612982103';
        document.body.appendChild(oScript);
    }else{
        oF1List.style.display = 'none';
    }
}  
oF1.onblur = function(){
    oF1List.style.display = 'none';
}


function callback(data){
    // console.log(data.data);
    data.data.forEach(function(v){
    var oLi = document.createElement('li');
    oLi.innerHTML = v.keyword+`<span>约${v.count}个商品</span>`;
    oF1List.appendChild(oLi);
    })
}

$('#hot_search').on('mouseenter',function(){
    console.log(1);
})