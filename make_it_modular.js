var folder = process.argv[2];
var ext = process.argv[3];
var mymodule = require('./mymodule.js');

mymodule(folder, ext, function (err, data) {
    if (err) {
        console.error(err)
    } 
    for (var i = 0; i < data.length; i++) {
        console.log(data[i]);
    }


});