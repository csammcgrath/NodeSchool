var fs = require('fs');
var path = require('path');

var fileName = process.argv[2];
var filter = process.argv[3];

fs.readdir(fileName, (err, data) => {
    if (err) return console.log(err);

    var len = data.length;

    for (var i = 0; i < len; i++) {
        var extension = path.extname(data[i]).replace('.', '');

        if (extension === filter) {
            console.log(data[i]);
        }
    }
});

/** Better Solution:
    The reason why is that it's not computing the replace function for EVERY
    file in the directory.


var fileNameNew = process.argv[2];
var filterNew = '.' + process.argv[3];

fs.readdir(fileNameNew, (err, data) => {
    if (error) return console.log(err);

    data.forEach(function (file) {
        if (path.extname(file === filterNew) {
            console.log(file);
        }
    });
});

**/
