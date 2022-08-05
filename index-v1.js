const http1=require('http');
http1.createServer((req,resp)=>{
  resp.write("<h1>Hello dgworld</h1>")
  resp.end;
}).listen(8080);