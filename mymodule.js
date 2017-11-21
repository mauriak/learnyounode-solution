module.exports = function(dir, filter, callback) {
    var fs = require('fs');
    var path = require('path');
    var results = [];
    fs.readdir(dir, function (err, data) {
        if (err) {
            return callback(err);
        } 
        data.forEach(function(file) {
            if (path.extname(file) === '.' + filter) {
                results.push(file);
            }
        })
        callback(null, results);
    });
    
}