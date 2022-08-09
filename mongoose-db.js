const { Int32 } = require('mongodb');
const mongodb=require('mongodb')
const mongoose=require('mongoose');
const main= async ()=>{
    await mongoose.connect("mongodb://127.0.0.1:27017/ecom-mk");
    const EmployeeSchema=new mongoose.Schema({ecno:Number,full_name:String});


const Employee=mongoose.model('Employee',EmployeeSchema);
//create
let data=new Employee({ecno:7369,full_name:'Shravan P'});
let insertResult=await data.save();
console.log(insertResult);
//update
let updateResult=await Employee.updateOne({ecno:7366},{$set:{full_name:'Murali Krishna CH'}})
console.log(updateResult);

//update
let deleteResult=await Employee.deleteMany({ecno:7369})
console.log(deleteResult);

//read
let readResult=await Employee.find({ecno:7366})
console.log(readResult);

}
main();