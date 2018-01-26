
function setCookie(name, value, expires, path, domain) {
	var sCookie = name + '=' + encodeURIComponent(value);
	if(expires) {
		var oDate = new Date();
		oDate.setDate(oDate.getDate() + expires);
		sCookie += ';expires=' + oDate;
	}
	if(path) {
		sCookie += ';path=' + path;
	}
	if(domain) {
		sCookie += ';domain=' + domain;
	}
	document.cookie = sCookie;
}

function getCookie(name) {
	var sCookie = document.cookie;
	var aCookie = sCookie.split('; ');
	for(var i = 0; i < aCookie.length; i++) {
		var aTemp = aCookie[i].split('=');
		if(aTemp[0] === name) {
			return decodeURIComponent(aTemp[1]);
		}
	}
}

$('.gotocart').click(function(){
    
        
    var s1 = $('.gotocart').attr('data-pic'),
        s2 = $('.gotocart').attr('data-name'),
        s3 = $('.gotocart').attr('data-price');
        console.log(s1);
    var oGoods = {
        x1 : s1,
        x2 : s2,
        x3 : s3
    }
    console.log(oGoods);
    var sGoods = getCookie('goods');
    
        if(typeof sGoods === 'undefined') {
            var aGoods = [];
        } else {
            var aGoods = JSON.parse(sGoods);
        }
    
        var isExists = aGoods.every(function (v, k) {
            if(v.x1 === s1) {
                v.num++;
                return false;
            }
            return true;
        });
    
        if(isExists === true) {
            aGoods.push(oGoods);
        }
        // 写入cookie
        setCookie('goods', JSON.stringify(aGoods), 7, '/');
        window.open("http://localhost/yoho1.0/html/shopping-cart.html","_blank");
        
})