const express=require('express')
const mongodb=require('mongodb')
const dbConnection=require('./mongo-db');
const mysqlDbcon = require('./mysql-db-example');

const app=express();


app.use(express.json())
app.get('/products',async (req,res)=>{
    let db=await dbConnection();
    let data= await db.collection('product');
    data=await data.find().toArray();
    res.send(data);
});

app.post('/addProduct',async (req,res)=>{
    let db=await dbConnection();
    let data =await db.collection('product');
    let result=await data.insert(req.body);
    res.send(result);
});
app.put('/updateProduct/:name',async (req,res)=>{
    let db=await dbConnection();
    let data =await db.collection('product');
    let result=await data.update({name:req.params.name},
        {$set:req.body});
    res.send(result);
});
app.delete('/deleteProduct/:id',async (req,res)=>{
    let db=await dbConnection();
    let data =await db.collection('product');
    // let result=await data.deleteOne({name:req.params.name});
    let result=await data.deleteOne({_id:new mongodb.ObjectId(req.params.id)})
    res.send(result);
});

// API with Mysql DB ALL CRUD operations

app.get('/employees',async (req,res)=>{
    mysqlDbcon.query("select * from employee",(err,result)=>{
        if(!err){res.send(result);}
    })

});

app.post('/addEmployee',async (req,res)=>{
    const employee=req.body;
    console.log(employee);
    mysqlDbcon.query("insert into employee set ?",employee,function(error,results,fields){
        if(error) throw error;
        else res.send(results);
    });
    
});

app.put('/updateEmployeeDOB/:ecno',async (req,res)=>{
    mysqlDbcon.query("update employee set dob=? where ecno=?",[req.body.dob,req.params.ecno],function(error,results,fields){
if(error) throw error;
else res.send(results);
    });
});


app.delete("/deleteEmployee/:ecno",async (req,res)=>{
    mysqlDbcon.query("delete from employee where ecno=?",[req.params.ecno],function(error,results,fields){
        if(error) throw error;
        else res.send(results);
    })
})
app.listen(8080);