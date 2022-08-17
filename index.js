const dbConnection=require('./mongodbUtil')

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
insert();
