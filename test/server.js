const http = require('http');

const hostname = '0.0.0.0';
const port = 6124;

const server = http.createServer((req, res) => {
  console.log("new request came");
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('its working fluffers from directory\n');
});



server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
