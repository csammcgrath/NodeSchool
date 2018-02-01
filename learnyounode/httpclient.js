var http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8');

    response.on('error', (error) => {
        console.log(error);
    });

    response.on('data', (data) => {
        console.log(data);
    })
});
