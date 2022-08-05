// console.log(process.argv[4]);

const fs=require('fs');
const ios=process.argv;
if(ios[2]=='a')
{
    fs.writeFileSync(ios[3],ios[4]);
}else if(ios[2]=='r'){
    fs.unlinkSync(ios[3]);
}else{
    console.log("invalid input");
}
