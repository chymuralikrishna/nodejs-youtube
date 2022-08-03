const express=require('express')
const path=require('path')
const app=express();
const publicPath=path.join(__dirname,'public')
// app.use(express.static(publicPath));
app.set("view engine","ejs");
app.get('/home',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});
app.get('/',(req,res)=>{
    res.sendFile(`${publicPath}/index.html`)
});
app.get('*',(req,res)=>{
    res.sendFile(`${publicPath}/nopagefound.html`)
});

// ejs
app.get('/profile',(_,resp)=>{
    const user={
        name:'Peter',
        email:'peter@test.com',
        country:'USA'
    }
   resp.render('profile',{user})
});


app.listen(8080);