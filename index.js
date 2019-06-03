var request = new XMLHttpRequest();
request.open('GET', 'ip/file/2019-05-28_13-18-08_Win32_85655329.mp4.srt', true);
request.onload = function(req) {
  if (request.status >= 200 && request.status < 400) {
    var data = request.responseText
    console.log('data', data)
  } else {
    console.log("request.onerror--",request.status);
  }
};
request.onerror = function() {
  // There was a connection error of some sort
  console.log("字幕打点文件请求失败，请检查是否为跨域问题或文件不存在！",request.status);
};
request.send(); 
