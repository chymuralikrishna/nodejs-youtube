const {MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
const dbname='ecom-mk';

async function getProducts(){
    
    await   client.connect();
    let  db=client.db(dbname);
    let  productList=db.collection('product');
    let result=await productList.find({}).toArray();
    console.log(result);
    
}

getProducts();