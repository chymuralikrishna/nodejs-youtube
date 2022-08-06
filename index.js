const express=require('express')
const reqFilter=require('./midleware')
const app=express();
const route=express.Router();
route.use(reqFilter);
app.set('view engine','ejs');

app.get('/',(req,res)=>{
    res.send('Welcome to Home page');
})

route.get('/users',(req,res)=>{
    res.send('Welcome to Users page');
})
app.use('/',route);
app.listen(8080);