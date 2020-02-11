const http = require('http');

var hostname = '127.0.0.1';
var port = process.env.PORT || 1337;


// deploy to  local host server
http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Tupe': 'text/plain'});
    response.end('Hello World\n');
}).listen(port, hostname, function () {
    console.log("Server running at http://" + hostname + ":" + port + "/");
    //console.log("Server running at http://" + port + "/");

});
