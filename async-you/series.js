var asyncyou = require('async');
var http = require('http');

asyncyou.series({
    requestOne: function (callback) {
        http.get(process.argv[2].toString(), function(response) {
            var body = '';

            response.on('data', function(chunk) {
                body += chunk.toString();
            });

            response.on('error', function(err) {
                callback(err);
            });

            response.on('end', function() {
                callback(null, body);
            });
        });
    },

    requestTwo: function (callback) {
        http.get(process.argv[3].toString(), function(response) {
            var body = '';

            response.on('data', function(chunk) {
                body += chunk.toString();
            });

            response.on('error', function(err) {
                callback(err);
            });

            response.on('end', function() {
                callback(null, body);
            });
        });
    }
}, function (err, results) {
    //display error if err != null
    if (err) return console.log(err);

    //display results
    console.log(results);
});

/*  TEACHER'S CODE
var http = require('http')
      , async = require('async');

    async.series({
      requestOne: function(done){
        fetchURL(process.argv[2], done);
      },
      requestTwo: function(done){
        fetchURL(process.argv[3], done);
      }
    },
    function done(err, result){
      if (err) return console.error(err);
      console.log(result);
    });


    function fetchURL(url, done) {
      var body = '';
      http.get(url, function(res){
        res.on('data', function(chunk){
          body += chunk.toString();
        });

        res.on('end', function(chunk){
          done(null, body);
        });
      }).on('error', function(e){
        done(e);
      });
    }
*/
