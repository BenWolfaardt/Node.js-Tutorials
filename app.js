const http = require('http');
const url = require('url');

const hostname = '127.0.0.1'; //default address
const port = 3456;
const serverUrl = `http://${hostname}:${port}`

const server = http.createServer((req, res) => {
    const { name } = url.parse(req.url, true).query;

    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    //text/plain refers to the formatting of the "file" could be html for exampl
    res.end(`Hello, ${name}!\n`);
});

server.listen(port, hostname, () => {
    console.log(`Server running at ${serverUrl}`);
});