var path = require('path');
var fs   = require('fs');

module.exports = function (filename, ext, callback) {
    fs.readdir(filename, (err, data) => {
        if (err) return callback(err);

        ext = '.' + ext;
        var arr = [];

        data.forEach(function (file) {
            if (path.extname(file) === ext) {
                arr.push(file);
            }
        });

        return callback(null, arr);
    });
}





/*
module.exports = function func1(callback) {
    function func2(err, data) {
        if (err) callback(err);
        ext = '.' + ext;

        data.forEach(function (file) {
            if (path.extname(file === filterNew) {
                console.log(file);
            }
        });
    }
}
*/
