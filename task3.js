const http = require('http');

const port = 7000; 

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end('Hello world');
});

server.listen(port, () => {
  console.log(`Server running at http://localhost:${port}/`);
});