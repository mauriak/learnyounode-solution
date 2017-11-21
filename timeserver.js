var net = require('net');
// Add leading zero if result is less than 10
function leadingZero (i) {
    if (i < 10) 
        return '0' + i;
    return i;
}

var date = new Date();
var year = date.getFullYear();
var month = leadingZero(date.getMonth() + 1);
var day = leadingZero(date.getDate());
var hours = leadingZero(date.getHours());
var min = leadingZero(date.getMinutes());

//"YYYY-MM-DD hh:mm" 

var dateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + min + '\n';

var server = net.createServer (function callback (s) {
    s.end(dateTime);
})
server.listen(process.argv[2]);
