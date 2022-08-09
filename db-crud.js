const dbConnection=require('./mongo-db')

//===== Create
const create=async ()=>{
    let db=await dbConnection();
    let data=await db.collection('product');
    data=await data.insertMany([{category:'mobile',name:'Iphone 5',price:29999.99 },{category:'tablet',name:'IPod 5',price:19999.99 }]);
   
}
create();

//===== Update
const update=async()=>{
    let db=await dbConnection();
    let data=await db.collection('product');
    data=await data.updateMany(
    {name:'Iphone 5'},
    {$set:{price:27999.99}});
}
update();

//===== Delete
const deleteCollection=async()=>{
    let db=await dbConnection();
    let data=await db.collection('product');
    data=await data.deleteMany({category:'mobile'})
}
deleteCollection();


//===== read
const  read= async ()=>{
    let db=await dbConnection();
    let data=await db.collection('product');

data=await data.find().toArray();
console.log(data);
}
read();
