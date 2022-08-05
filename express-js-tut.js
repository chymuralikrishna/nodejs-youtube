const express=require('express')
const app=express();
app.get('',(req,res)=>{
res.send('Hello, Welcome '+req.query.name);
});

app.get('/login',(req,res)=>{
    res.send(`
        <input type="text" placeholder="User Name" id="userid" />
        <input type="password" placeholder="password" id="password" />
        <a href="/welcome" > Login</a>

    `);
    });

    app.get('/welcome',(req,res)=>{
        res.send(`
            <h1>Welcome,${req.query.userid}</h1>
        `);
        });




app.get('/about',(req,res)=>{
    res.send('Hello, this is express about page');
    });

app.listen(4500);