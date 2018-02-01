var http = require('http');
var asyncyou = require('async');

asyncyou.map(process.argv.splice(2), (list, results) => {
    var body = '';

    var req = http.get(list, (response) => {
        response.on('data', (chunk) => {
            body += chunk.toString();
        }),
        response.on('error', (err) => {
            results(err);
        }),
        response.on('end', () => {
            results(null, body);
        });
    });

    //req.write(body); ==> This will not work if we are streaming multiple items.
    //just send the body to the req upon completion which then calls results()
    req.end(body);
}, (err, results) => {
    if (err) return console.log(err);

    console.log(results);
});
