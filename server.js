const http = require('http');

const hostname = '0.0.0.0';
const port = 6124;

const server = http.createServer((req, res) => {
  console.log("new request came");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World! again mfs once more, here we go again test number 71\n');
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
