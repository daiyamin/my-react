var http = require('http');
var fs = require("fs");

http.createServer(function (request, response) {

    // 发送 HTTP 头部 
    // HTTP 状态值: 200 : OK
    // 内容类型: text/plain
    response.writeHead(200, {'Content-Type': 'text/plain'});

    // 发送响应数据 "Hello World"
    response.end('Hello World\n');
}).listen(8888);

// 终端打印如下信息
console.log('Server running at http://127.0.0.1:8888/');
fs.readFile('a.txt', (err, data) => {
  if(err) console.error(err);
  console.log(data.toString());
});
console.log('程序执行结束');
const buf1 = Buffer.alloc(10);
console.log(buf1);
const buf2 = Buffer.alloc(10, 1);
console.log(buf2);
const buf3 = Buffer.allocUnsafe(10);
console.log(buf3);
const buf4 = Buffer.from([1, 2, 3]);
console.log(buf4);
const buf5 = Buffer.from('tést');
console.log(buf5);
const buf6 = Buffer.from('tést', 'latin1');
console.log(buf6);
