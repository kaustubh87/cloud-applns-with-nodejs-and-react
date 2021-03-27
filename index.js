const http = require('http');

const requestListener = function(req,res) {
    res.writeHead(200);
    res.end('Hello, World!');
}

const port = 8080;
const server = http.createServer(requestListener);
server.listen(port, ()=>{
    console.log("Server running on port " +port);
});

