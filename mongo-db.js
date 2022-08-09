const {MongoClient}=require('mongodb');
const url='mongodb://127.0.0.1:27017';
const client=new MongoClient(url);
const dbname='ecom-mk';

async function dbConnection(){
    await   client.connect();
    let  db=client.db(dbname);
    // let  productList=db.collection('product');
    return db;
}

async function dbClose(){
    await client.close();
}
module.exports=dbConnection;