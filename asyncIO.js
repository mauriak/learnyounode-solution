var fs = require('fs');
var sum;

function finishedReading(err, content) {
    if (err) return console.error(err);
    sum = content.toString().split('\n').length-1;
    console.log(sum);
}
fs.readFile(process.argv[2], finishedReading);
