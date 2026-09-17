import http from 'http';

const server = http.createServer((req, res) => {
  
  res.writeHead(200, { 'Content-Type': 'application/json' });


  const data = {
    product: 'hp laptop',
    price: '80000',
    color:'black',
    category:'electronics'
  };

  
  res.end(JSON.stringify(data));
});

server.listen(3000, () => {
  console.log('Server is running on http://localhost:3000');
});