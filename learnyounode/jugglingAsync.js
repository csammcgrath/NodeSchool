var http = require('http');

http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8');
    var body = '';

    response.on('error', (error) => {
        console.log(error);
    });

    response.on('data', (data) => {
        body += data;
    });

    response.on('end', () => {
        console.log(body);
        body = '';
        http.get(process.argv[3], (response) => {
            response.setEncoding('utf-8');
            var body = '';

            response.on('error', (error) => {
                console.log(error);
            });

            response.on('data', (data) => {
                body += data;
            });

            response.on('end', () => {
                console.log(body);
                body = '';
                http.get(process.argv[4], (response) => {
                    response.setEncoding('utf-8');
                    var body = '';

                    response.on('error', (error) => {
                        console.log(error);
                    });

                    response.on('data', (data) => {
                        body += data;
                    });

                    response.on('end', () => {
                        console.log(body);
                        body = '';

                    });
                });
            });
        });
    });
});

//learnyounode instructor's code.
/*http.get(process.argv[2], (response) => {
    response.setEncoding('utf-8');
    var body = '';

    response.on('error', (error) => {
        console.log(error);
    });

    response.on('data', (data) => {
        body += data;
    });

    response.on('end', () => {
        console.log(body);
        body = '';

    });
});*/
