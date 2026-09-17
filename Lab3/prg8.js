import http from 'http';  
import { createReadStream } from 'fs';
import { readFile } from 'fs/promises'; 
const server =http.createServer(async(req,res)=>{
    if(req.url==='/stream'){
        const stream=createReadStream("big.txt",{encoding:"utf-8"});
        stream.pipe(res);
    } else if(req.url==='/normal'){
        const text= await readFile("big.txt");
        res.end(text);
    } else if(req.url==='/product'){
        res.setHeader("content-type","text/html");
        res.statusCode=200;
        const data=createReadStream("pages/product.html");
        data.pipe(res);
    } else if(req.url==='/about'){
        res.setHeader("content-type","text/html");
        res.statusCode=200;
        const data=createReadStream("pages/about.html");
        data.pipe(res);
    }else if(req.url==='/home'){
        res.setHeader("content-type","text/html");
        res.statusCode=200;
        const data=createReadStream("pages/home.html");
        data.pipe(res);
    } else if(req.url==='/contact'){
        res.setHeader("content-type","text/html");
        res.statusCode=200;
        const data=createReadStream("pages/contact.html");
        data.pipe(res);
    } 
});
server.listen(4003,()=>{
    console.log('server is listening');
});