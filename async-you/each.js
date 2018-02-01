var http = require('http');
var asyncyou = require('async');

asyncyou.each([process.argv[2], process.argv[3]], (arr, results) => {
    http.get(arr, (response) => {
        //var body = '';
        response.on('data', (chunk) => {
            //requirements: just check to see if program requires error
            //body += chunk.toString();
        }),
        response.on('end', () => {
            results(null);
        }),
        response.on('error', (err) => {
            results(err);
        });
    });
}, (err) => {
    if (err) console.log(err);
});

/* Instructor's version
var http = require('http')
  , async = require('async');

async.each(process.argv.slice(2), function(item, done){
  http.get(item, function(res){
    res.on('data', function(chunk){
    });

    res.on('end', function(){
      done(null);
    });
  }).on('error', function(err){
    done(err);
  });
},
function(err){
  if(err) console.error(err);
});
*/
