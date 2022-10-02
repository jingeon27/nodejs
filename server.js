// 1.서버 사용을 위해서 http 모듈을 http 변수에 담는다.
var http = require("http");
// 2. http 모듈로 서버를 생성한다.
var server = http.createServer(function (req, res) {
  res.writeHead(200, { "Content-Type": "text/html" });
  res.end("Hello node.js");
});
// 3. listen 함수로 8080 포트를 가진 서버를 실행한다. 서버가 실행된 것을 콘솔창에서 확인하기 위해 'Server is running...' 로그를 출력한다
server.listen(8080, function () {
  console.log("Server is running...");
});
