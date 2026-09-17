import http from 'http';
import {readFile} from 'fs/promises';
const server=http.createServer(async(req,res)=>{
    res.write('loading....');
    const text =await readFile("big.txt");
    res.end(text);
});

server.listen(3001, () => {
  console.log('Server is running on http://localhost:3001');
});