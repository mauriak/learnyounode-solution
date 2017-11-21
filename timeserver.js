var net = require('net');

var date = new Date();
var year = date.getFullYear();
var month = date.getMonth() + 1;
var day = date.getDate();
var hours = date.getHours();
var min = date.getMinutes();

if (month < 10) month = '0' + month;
if (day < 10) day = '0' + day;
if (hours < 10) hours = '0' + hours;
if (min < 10) min = '0' + min;

//"YYYY-MM-DD hh:mm" 

var dateTime = year + '-' + month + '-' + day + ' ' + hours + ':' + min + '\n';
var server = net.createServer (function callback (s) {
    s.end(dateTime);
})
server.listen(process.argv[2]);
