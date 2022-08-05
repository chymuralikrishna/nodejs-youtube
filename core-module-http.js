const http=require('http');
const colors=require('colors');
http.createServer((req,resp)=>{
    resp.write("<h1>damn you   </h1>");
    resp.end;
}).listen(8080);