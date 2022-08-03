// 1. variables
/* 
var x = 20;
let y = 30;
const z = 50;
//z=60; Error const can not change

console.log(x + y + z);
 */

// 2. Loops

// 2.1 for loop
/* for (var i = 0; i < 10; i++) {
    console.log(i);
}
 */

// 2.2 While loop
/* var i=0;
while(i<5){
    console.log(i);
    ++i;
} */

//3.Arrays

// 3.1 Arrays primitive
const arr=[1,2,2,3,4,5,6,3,4];
console.log(arr);
console.log(arr[0]);
console.log(arr.length);
// filters
let result= arr.filter((item)=>{return item>5})
console.log(result);
// forEach

/* arr.forEach(element => {
    console.log(element);
}); */


// 3.2 array with objects
/* 
const users=[
    {
        firstName: 'user1',
        lastName: 'one '
      },
      {
        firstName: 'user2',
        lastName: 'two'
      },
      {
        firstName: 'user3',
        lastName: 'three'
      }
]

users.forEach(element=>{
    console.log(element.firstName+' '+element.lastName);

})
 */


// 4. Import variable from another js
/* 
const app=require('./export-var-tut')
console.log(app);
console.log(app.x+app.y);
console.log('Function: '+app.z());
 */


