import http from 'http';
const server=http.createServer((req,res)=>{
    if(req.url==='/' && req.method==='GET'){
        res.end('home page');
    }
    else if(req.url==='/product' && req.method==='GET'){
        const products=[{
            id:1,
            name:"mobile",
            price:30000
        },
        {
            id:2,
            name:"laptop",
            price:50000
        }
    ];
        res.end(JSON.stringify(products));
    }
    else if(req.url==='/product' && req.method==='POST'){
        //retrive data from client
        let body="";
        req.on("data",(chunk)=>{
            body+=chunk;
        });
        req.on("end",()=>{
            const product=JSON.parse(body);
        
        //add data
        res.writeHead(201,{
            'content-type':'application/json'
        });
        //send back the status
        res.end(
            JSON.stringify({
                msg:"product added",
                product,
            }),
        );
    });
    }
    else if(req.url==='/product' && req.method==='PUT'){
        res.end('update product');
    }
    else if(req.url==='/product' && req.method==='DELETE'){
        res.end('remove product');
    }

});
server.listen(3002,()=>{
    console.log('prg11 is listening');
    
})