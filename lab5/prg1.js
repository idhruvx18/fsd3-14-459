import express from 'express';
import path from 'path';
import {fileURLToPath} from 'node:url';
const app=express();
const port=3333;
const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);
app.get("/",(req,res)=>{
    res.sendFile(path.join(dirname , "pages" , "prg1_hp.html"));
});
app.get("/about",(req,res)=>{
    res.sendFile(path.join(dirname , "pages" , "about.html"));
});
app.get("/enquiry",(req,res)=>{
    res.sendFile(path.join(dirname , "pages" , "enquiry.html"));
});

app.listen(port,()=>{
    console.log('listening at 3333'); 
});
