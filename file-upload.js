const express=require('express')
const multer=require('multer');
const app=express();


const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb){
            cb(null,"uploadedFiles")
        },
        filename:function(req,file,cb){
        cb(null,file.filename+"-"+Date.now()+".jpg")
        }
    })
}).single("test");
app.post("/uploadFile",upload,(req,res)=>{
res.send('file uploaded');
});

app.listen(8080);