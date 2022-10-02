var http = require("http");
// 1. 요청한 url을 객체로 만들기 위해 url 모듈사용
var url = require("url");
// 2. 요청한 url 중에 Query String 을 객체로 만들기 위해 querystring 모듈 사용
var querystring = require("node:querystring");

var server = http.createServer(function (req, res) {
  // 3. 콘솔화면에 로그 시작 부분을 출력
  console.log("--- log start ---");
  // 4. 브라우저에서 요청한 주소를 parsing 하여 객체화 후 출력
  var parseUrl = url.parse(req.url);
  console.log(parseUrl);
  // 5.객체화된 url 중에 Query String 부분만 따로 객체화 후 출력
  var parseQuery = querystring.parse(parseUrl.query, "&", "=");
  console.log(parseQuery);
  // 6. 콘솔화면에 로그 종료 부분을 출력
  console.log("--- log end ---");

  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("var1의 값은 " + parseQuery.var1);
});

server.listen(8080, function () {
  console.log("Server is running...");
});
