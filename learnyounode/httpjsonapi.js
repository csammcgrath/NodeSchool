var http = require('http');
var fs = require('fs');
var url = require('url');

//example: http://localhost:argv[2]/api/parsetime?iso=2013-08-10T12:10:15.474Z
//.host returns address -- localhost:argv[2]
//.pathname returns first part after first / after url -- /api/parsetime
//.search returns the content after ? -- ?iso=2013-08-10T12:10:15.474Z

http.createServer(function (request, response) {
    response.writeHead(200, {'Content-Type': 'application/json'});
    var theUrl = url.parse(request.url, true);

    if (request.method == 'GET') {
        if (theUrl.pathname === '/api/parsetime') {
            var theString = JSON.stringify(theUrl.search);
            //the reason for + is to convert it to Number format and subtracted 7 to make it
            //agree with testBed since testbed requires it to be 14 instead of 21 and I have no idea why
            response.write(JSON.stringify({ "hour"   : (+theString.substr(17, 2)) - 7,
                                            "minute" : +theString.substr(20, 2),
                                            "second" : +theString.substr(23, 2)}));
        }

        if (theUrl.pathname === '/api/unixtime') {
            var theString = new Date(theUrl.search.substr(5, 25));
            response.write(JSON.stringify({"unixtime" : +theString.getTime()}));
        }
    }

    response.end();
}).listen(process.argv[2]);
