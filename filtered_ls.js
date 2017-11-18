var fs = require('fs');
var directory = process.argv[2];
var ext = process.argv[3];
var regex = RegExp('\\.' + ext + '$');

var file = fs.readdir(directory, function(err, files) {
    if (err) return console.error(err);
    for (var i = 0; i < files.length; i++){
        if (regex.test(files[i])) {
            console.log(files[i]);
        }
    }
})