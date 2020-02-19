const http = require('http');

http.createServer((req, res) => {
    res.writeHead(200, { 'Content-Type':'text/html' });
    res.write('Halo Dunia');
    res.end();
}).listen(8080);

console.log('Aplikasi berjalan!');