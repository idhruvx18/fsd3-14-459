import express from 'express';

const app = express();

app.get("/" , (req,res)=>{
    res.send("<h1> starting with the express </h1>");
})
app.listen(3000, ()=>{
    console.log("server 3000 is listening ");
})