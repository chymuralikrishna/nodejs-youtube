/* let a=10;
console.log("task 1"+(++a));
setTimeout(() => {
   console.log("task2"+(++a)) ;
}, 2000);
console.log("task3"+(++a)); */

let a=10;
console.log("task 1 : "+(++a));

let waitingData=new Promise((resolve,reject)=>{
    setTimeout(() => {
        console.log("task 2 : "+(++a)) ;
    }, 2000)
})

waitingData.then((data)=>{
    console.log("task 3 : "+(++a)); 
})



