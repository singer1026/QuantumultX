/*
*.ihuman.com
https://shizibook.ihuman.com/api/v1/getRadical
^https?:\/\/.*\.ihuman\.com\/api\/v1\/getRadical(.+) url script-response-body https://raw.githubusercontent.com/singer1026/QuantumultX/master/hesz.js
*/
var obj = JSON.parse($response.body);
if ($request.url.indexOf("/api/v1/getRadical") != -1){
  var list = obj.result;
  for(item in list){
  	item.isvip = 0;
  }
  obj.result = list;
}
var body = JSON.stringify(obj);
console.log("洪恩识字========================\n" + body);
$done(body);
