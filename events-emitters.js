const express=require('express');
const EventEmitter=require('events')
const app=express();
const event=new EventEmitter();
let homeAPICount=0;
event.on("homeAPI",()=>{
    homeAPICount++;
    console.log("Event Called",homeAPICount)
})
app.get("/",(req,res)=>{
    res.send("api Called");
    event.emit("homeAPI");
})

app.get("/page1",(req,res)=>{
    res.send("page1 Called");
})
app.get("/page2",(req,res)=>{
    res.send("page2 Called");
})
app.listen(8080);