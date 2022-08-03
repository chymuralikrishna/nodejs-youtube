const http=require('http');
http.createServer((req,resp)=>{
    resp.write("<h1>damn you   </h1>")
    resp.end;
}).listen(8080);