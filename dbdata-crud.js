const dbConnection=require('./mongodbUtil')
//  Create
const insert=async ()=>{
    const db=await dbConnection();
    const result=db.insert(
     [
        {category:'mobile',name:'Iphone 6',cost:69999},
        {category:'mobile',name:'Iphone 7',cost:69999},
        {category:'mobile',name:'Iphone 8',cost:69999},
        {category:'mobile',name:'Iphone 10',cost:69999}
    ]
)
}
// insert();

// Update
const update=async ()=>{
    const db=await dbConnection();
    const result=db.update(
        {name:'Iphone 10'},
        {$set:{cost:59999}}
)
}
// update();

// Update
const deleteData =async ()=>{
    const db=await dbConnection();
    const result=db.deleteOne({name:'Iphone '});
}


deleteData();

// Read
const read =async ()=>{
    let data =await dbConnection();
    // data= await data.find().toArray();
    data= await data.find({name:'Iphone 10'}).toArray();
    console.warn(data)
}
read();



