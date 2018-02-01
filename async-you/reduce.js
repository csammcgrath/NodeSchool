var asyncyou = require('async');
var http = require('http');
var url = process.argv[2];


asyncyou.reduce(['one', 'two', 'three'], 0, function(index, list, callback) {
    //the url + ?number= + index converts the url into an url with query parameter
    http.get(url + '?number=' + list, function (response) {
        response.on('data', function (chunk) {
            index += +chunk;
        });

        response.on('end', function () {
            callback(null, index);
        });

        response.on('error', function (err) {
            callback(err);
        });
    });
}, function (err, results) {
    if (err) return console.log(err);

    console.log(results);
});

/* Instrcutor's Version:
var http = require('http')
  , async = require('async');

async.reduce(['one', 'two', 'three'], 0, function(memo, item, done){
  var body = '';

  http.get(process.argv[2] + "?number=" + item, function(res){
    res.on('data', function(chunk){
      body += chunk.toString();
    });

    res.on('end', function(){
      done(null, memo + Number(body));
    });
  }).on('error', done);

}, function done(err, result){
  if (err) return console.log(err);
  console.log(result);
});
*/
