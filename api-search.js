const { json } = require('express');
const express=require('express');
const mongodb=require('mongodb');
const dbConnection=require('./mongo-db');
const app=express();
app.use(express.json());

app.get('/products',async (req,res)=>{
let db=await dbConnection();
let data=await db.collection('product');
data=await data.find().toArray();
res.send(data);
});

app.get('/searchProduct/:category',async (req,res)=>{
    console.log(req.params.category);
    let db=await dbConnection();
    let data=await  db.collection('product').find({
        "$or":[{"category":{$regex:req.params.category}}]
    }).toArray();
    
    res.send(data);
})

app.listen(8080)