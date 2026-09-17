import { createReadStream } from 'fs';
import http, { createServer } from 'http';
const server=http.createServer((req,res)=>{
    if(req.url === "/"){
        res.setHeader('content-type','text/html');
        const stream_=createReadStream('pages/airtag.html',{encoding:'utf-8'});
        stream_.pipe(res);
    }
    else if(req.url==="/mobile"){
        res.setHeader('content-type','text/json');
        const stream_=createReadStream('pages/mobile.json',{encoding:'utf-8'});
        stream_.pipe(res);
    }
    else if(req.url==="/chatgpt"){
        res.setHeader('content-type','text/plain');
         const stream_=createReadStream('pages/chatgpt.txt',{encoding:'utf-8'});
        stream_.pipe(res);
    }
    else{
        res.statusCode=404;
        res.end("not found");
    }
});
server.listen(3000,()=>{
    console.log('server is listening');
    
})