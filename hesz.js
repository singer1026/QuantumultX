/*
*.ihuman.com
洪恩识字
https://shizibook.ihuman.com/api/v1/getRadical
洪恩双语绘本
https://bookapi.ihuman.com/v3/get_book_info
洪恩数学
https://mathapi.ihuman.com/v3/get_purchase_list
^https?:\/\/.*\.ihuman\.com\/(.+) url script-response-body https://raw.githubusercontent.com/singer1026/QuantumultX/master/hesz.js
*/
var obj = JSON.parse($response.body);
if ($request.url.indexOf("/api/v1/getRadical") != -1){
  var list = obj.result;
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    item.isvip = 0;
  }  
}

if ($request.url.indexOf("bookapi.ihuman.com/v3/get_book_info") != -1) {
	var list = obj.result.books;
	for (var i = 0; i < list.length; i++) {
    	var item = list[i];
    	item.is_vip = 0;
  	} 
}

if ($request.url.indexOf("mathapi.ihuman.com/v3/get_purchase_list") != -1) {
	var vip = obj.result.vip;
	vip.vip_type = 1;
}
var body = JSON.stringify(obj);
$done(body);
