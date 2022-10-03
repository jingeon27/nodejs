var http = require("http");
var querystring = require("node:querystring");

var server = http.createServer(function (req, res) {
  // 1. post로 전달된 데이터를 담을 변수를 선언
  var postdata = "";
  // 2. request 객체에 on() 함수로 'data' 이벤트를 연결
  req.on("data", function (data) {
    // 3. data 이벤트가 발생할 때마다 calllback을 통해 postdata 변수에 값을 저장
    postdata = postdata + data;
  });
  // 4. request 객체에 on() 함수로 'end' 이벤트를 연결
  req.on("end", function () {
    // 5. end 이벤트가 발생하면(end는 한번만 발생한다.) 3번에 저장해둔 postdata 를 querystring 으로 객체화
    var parseQuery = querystring.parse(postdata);
    // 6. 객체화된 데이터를 로그로 출력
    console.log(parseQuery);
    // 7. 성공 HEADER 와 데이터를 담아서 클라이언트에 응답처리
    res.writeHead(200, { "Content-Type": "text/html" });
    res.end("var1의 값 = " + parseQuery.var1);
  });
});
server.listen(8080, function () {
  console.log("Server is running...");
});
