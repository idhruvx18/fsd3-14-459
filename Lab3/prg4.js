import http from 'http';
const server =http.createServer((req,res)=>{
    if(req.url==='/'){
        res.end("<h1>product page</h1>");
    }else if(req.url==='/cart'){
        res.end("<h1>cart pages</h1>");
    }else if(req.url==='/checkout'){
         res.end(`checkout
            `);
    }
    else{
        res.statusCode = 404;
        res.end(`
            <h1>404, Not found</h1>
            <p>Page not found</p>
            <a href='/'>Home</a>
            `);
    }
});
server.listen(4000, () => console.log("Server is running..."));