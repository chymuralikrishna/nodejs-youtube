const fs=require('fs')
const path=require('path')
const dirPath=path.join(__dirname,'files-crud');
const filePath=`${dirPath}/fileCrudOps.txt`;
// file writing
fs.appendFile(filePath,' Hi',(err)=>{
    if(!err) console.log("Text appended");
})

//file read
fs.readFile(filePath,'utf8',(err,item)=>{
    console.log(item);
})

// rename
fs.rename(filePath,`${dirPath}/fileCrudOperations.txt`,(err)=>{
    if(!err)console.log("Rename sucessfully.... "+filePath);
});

//Delete file 
fs.unlinkSync(`${dirPath}/fileCrudOperations.txt`);
