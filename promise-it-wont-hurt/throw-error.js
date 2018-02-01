//holds the invalid json. the instructions says that it is an invalid json format
var val = process.argv[2];

//format the json. if there is an error, throw it.
function parsePromised(input) {
    return new Promise((fulfill, reject) => {
        try {
            fulfill(JSON.parse(input));
        } catch (e) {
            reject(e);
        }
    });
}

//report on the error message here
function rejection(err) {
    console.log(err.message);
}

//calls the rejection function if the fulfill function is null which should
//be since process.argv[2] is null.
parsePromised(val).then(null, rejection);
