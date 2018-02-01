var http = require('http');
var fs = require('fs');

var server = http.createServer(function (req, res) {
    var filename = process.argv[3];

    var stream = fs.createReadStream(filename);

    stream.on('error', () => {
        stream.end(err);
    });

    stream.pipe(res);
});
server.listen(process.argv[2]);
