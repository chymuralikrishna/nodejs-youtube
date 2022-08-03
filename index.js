const express=require('express');
const path=require('path');
const app=express();
const publicPath=path.join(__dirname,'public')

app.set('view engine','ejs');

app.get('',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});
// ejs
app.get('/profile',(_,res)=>{
    const user={name:'Murali Krishna Chintakindi',email:'chymuralikrishna@gmail.com',mobile:1234567890}
    res.render('profile',{user})
});

app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/nopagefound.html`)
});


app.listen(8080);