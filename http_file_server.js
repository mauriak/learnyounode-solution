var fs = require('fs');
var http = require('http');
var server = http.createServer (function (req, res) {
    res.writeHead(200, { 'content-type': 'text/plain'})
    var readStream = fs.createReadStream(process.argv[3]);
    readStream.on('open', function () {
        readStream.pipe(res);
    })
})
server.listen(Number(process.argv[[2]]));