var fs = require('fs');

fs.readFile(process.argv[2], (err, buf) => {
    if (err) throw err;

    console.log(buf.toString().split('\n').length - 1);
});
