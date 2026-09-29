import express from 'express';

const app = express();

app.get("/" , (req,res)=>{
    res.send("<h1> starting with the express </h1>");
})
app.listen(3000, ()=>{
    console.log("server 3000 is listening ");
})

app.post("/login",(req,res)=>{
    res.send({msg:"enter user"});
})
app.put('/user/update/1',(req,res)=>{
    res.send({msg:"update user "});
})
app.delete('/user/1',(req,res)=>{
    res.send({msg:'remove user'});
})
app.get("/about",(req,res)=>{
    res.send("<h2> we are fsd developer </h2>");
})
app.use((req,res)=>{
    res.status(404).send("not found");
})

// app.get / app.post / app.put / app.delete / app.use