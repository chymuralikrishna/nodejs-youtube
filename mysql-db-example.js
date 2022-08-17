const mysql=require('mysql')
const mysqlDbcon=mysql.createConnection({
    host:"127.0.0.1",    
    port:"3306",
    user:"root",
    password:"root123",
    database:"test"
});

mysqlDbcon.connect((err)=>{
    if(err){
        console.warn("error");
    }
    else{
        console.warn("Connected");
    }
});

module.exports=mysqlDbcon;