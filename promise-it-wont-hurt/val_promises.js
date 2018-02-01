function attachTitle(name) {
    return 'DR. ' + name;
}

var promise = new Promise((fulfill, reject) => {
    fulfill('MANHATTAN');
});

promise.then(attachTitle).then(console.log);

/* Instructor's Code
'use strict';

function attachTitle(name) {
  return 'DR. ' + name;
}

Promise.resolve('MANHATTAN')
  .then(attachTitle)
  .then(console.log);
*/
