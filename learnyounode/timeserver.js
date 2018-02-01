var net = require('net');
var server = net.createServer(function (socket) {
    var date = new Date();
    var data = "";

    data += (date.getFullYear() + '-'
            + (((date.getMonth() + 1) < 10) ? '0' : '')
            + (date.getMonth() + 1) + '-'
            + ((date.getDate() < 10) ? '0' : '')
            + date.getDate() + ' '
            + date.getHours() + ':'
            + date.getMinutes()
            + '\n');

    socket.write(data);

    socket.end();
});
server.listen(process.argv[2]);
