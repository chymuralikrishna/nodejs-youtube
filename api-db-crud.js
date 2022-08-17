const express=require('express')
const mongodb=require('mongodb')
const dbConnection=require('./mongo-db')

const app=express();
app.use(express.json())
app.get('/products',async (req,res)=>{
    let db=await dbConnection();
    let data= await db.collection('product');
    data=await data.find().toArray();
    res.send(data);
})

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
app.listen(8080);