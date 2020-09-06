/*
https://shizibook.ihuman.com/api/v1/getRadical
^https?:\/\/shizibook.ihuman.com/api\/v1/getRadical/\ url script-response-body https://raw.githubusercontent.com/NobyDa/Script/master/QuantumultX/File/xjsp.js
*/
var obj = JSON.parse($response.body);
if ($request.url.indexOf("/api/v1/getRadical") != -1){
  var list = obj.result;
  for(item in list){
  	item.isvip = 1;
  }
  
}
$done({body: JSON.stringify(obj)});
