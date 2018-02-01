var printDirectory = require('./printDir2Modular.js')

printDirectory(process.argv[2], process.argv[3], (err, data) => {
    if (err) return console.log(err);

    data.forEach(function (file) {
        console.log(file)
    });
});
