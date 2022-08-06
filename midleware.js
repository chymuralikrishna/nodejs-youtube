module.exports= reqFilter=(req,res,next)=>{
    if(req.query.key=='mk'){
        next();
    }else{
        res.send('Please provide key');
    }
}