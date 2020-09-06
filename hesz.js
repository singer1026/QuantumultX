/*
*.ihuman.com
洪恩识字
https://shizibook.ihuman.com/api/v1/getRadical
洪恩双语绘本
https://bookapi.ihuman.com/v3/get_book_info
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
var body = JSON.stringify(obj);
$done(body);
