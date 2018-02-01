var http = require('http');
var fs = require('fs');
var asyncyou = require('async');

//begin waterfall process
asyncyou.waterfall([
    //read file -- extract the "url"
    function readFile (callback) {
        fs.readFile(process.argv[2], (err, data) => {
            if (err) return console.log(err);

            //success --> go to the next part
            callback(null, data);
        });
    },

    function display(body, callback) {
        //gets the file from the parameter then parse through it
        http.get(body.toString(), (response) => {
            var body = '';

            //append data to body
            response.on('data', function(chunk) {
                body += chunk;
            });

            //got an error, throw error through callback
            response.on('error', function(err) {
                callback(err);
            });

            //reached to the end. do callback and make error null
            response.on('end', function() {
                callback(null, body);
            });
        });
    }
], (err, results) => {
    //dispaly error message
    if (err) return console.log(err);

    //display results
    console.log(results);
});
