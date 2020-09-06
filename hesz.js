/*
洪恩识字
*.ihuman.com
https://shizibook.ihuman.com/api/v1/getRadical
^https?:\/\/.*\.ihuman\.com\/api\/v1\/getRadical(.+) url script-response-body https://raw.githubusercontent.com/singer1026/QuantumultX/master/hesz.js
*/
var obj = JSON.parse($response.body);
if ($request.url.indexOf("/api/v1/getRadical") != -1){
  var list = obj.result;
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    item.isvip = 0;
  }  
}
var body = JSON.stringify(obj);
console.log("洪恩识字========================\n" + body);
$done(body);
