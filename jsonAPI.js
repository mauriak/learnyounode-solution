var http = require('http');
var url = require('url');

var parseTime = function (t) {
    return {
        hour: t.getHours(),
        minute: t.getMinutes(),
        second: t.getSeconds()
    }
}

function unixTime(t){
    return {unixtime: t.getTime()}
}

var parseQuery = function (url) {
    if (url.pathname === '/api/parsetime'){
        return parseTime(new Date(url.query.iso))
    } else if (url.pathname === '/api/unixtime'){
        return unixTime(new Date(url.query.iso))
    } else {
        return "Invaid endpoint";
    }
}
http.createServer(function (req, res) {
    if (req.method === 'GET') {
    res.writeHead(200, {'Content-Type': 'application/json'});
    url = url.parse(req.url, true);
    
    res.end(JSON.stringify(parseQuery(url)))
    } else {
        res.writeHead(405);
        res.end();
    }
}).listen(Number(process.argv[2]))