var http = require('http');
var asyncyou = require('async');
var url = process.argv[2];
var count = 0;
var body = '';

asyncyou.whilst(
    function () {
        return body.trim() != 'meerkat';
    },
    function (callback) {
        http.get(url, function (response) {
            count++;
            response.on('data', function (chunk) {
                body += chunk.toString();
            });

            response.on('end', function() {
                callback(null, count);
            });

            response.on('error', function (err) {
                callback(err);
            });
        });
    },
    function(err, results) {
        if (err) return console.log(err);

        console.log(count);
    }
);

/* Instructor's Notes
var http = require('http')
  , async = require('async');

var requestBody = '';

var count = 0;

async.whilst(
  function() {
    return !/meerkat/.test(requestBody.trim());
  },

  function(done){
    var body = '';
    http.get(process.argv[2], function(res){
      res.on('data', function(chunk){
        body += chunk.toString();
      });

      res.on('end', function(){
        ++count;
        requestBody = body;
        done();
      });
    }).on('error', done);
  },

  function(err){
    if (err) return console.log(err);
    console.log(count);
  }
)
*/
