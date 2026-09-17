import http from 'http';
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==="GET"){
        res.setHeader('content-type','text/html');
        res.end('<h1>hello</h1>');
    }
    else{
        res.statusCode=404;
        res.end('not found');
    }
});
server.listen(3002,()=>{
    console.log('prg10 is listening');
});