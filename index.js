var board = require('./board');

var n = process.argv[2];
console.log('find: '+  n);
n = parseInt(n);
if (isNaN(n)) {
  throw "only integer";
}
var start = Date.now();
var board = board(n);

console.log('time: ' + (Date.now() - start) + ' ms');
console.log('-----------------');
console.log('result: ' +board);
console.log('-----------------');
