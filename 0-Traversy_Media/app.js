const http = require('http');
const fs = require('fs');

const hostname = '127.0.0.1'; //default address
const port = 3000;
const serverUrl = `http://${hostname}:${port}`

fs.readFile('index.html', (err, html) => {
    if (err) {
        throw err;
    }

    const server = http.createServer((req, res) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html');
        //text/html refers to the formatting of the "file" could be plain for exampl
        res.write(html);
        res.end();
    });

    server.listen(port, hostname, () => {
        console.log(`Server running at ${serverUrl}`);
    });
});