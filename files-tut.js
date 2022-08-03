const fs=require('fs');
const path=require('path');
const dirpath=path.join(__dirname,'.');

fs.readdir(dirpath,(err,files)=>{
    files.forEach((item)=>{
        console.log(item)
    })
})

