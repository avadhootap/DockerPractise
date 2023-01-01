const express=require('express');
const app=express();
app.get('/',(req,resp)=>{
    resp.sendFile('public/Index.html',{root:__dirname})
});
app.listen(8080);
