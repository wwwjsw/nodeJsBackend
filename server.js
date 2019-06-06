const http = require('http');

// server.js

const ip = 'localhost';
const port = 3000;

http.createServer(function (req, resp) {
    
    let html = '';
    
    if (req.url == '/') {
        html = `<html><body><a href="#">index</a></body></html>`;
    }
    
    resp.end(html);
}).listen(port, ip);