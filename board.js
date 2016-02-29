var Queen = require('./queen');

var board = function(n) {
  var solution = 0;
  var queens = [];
  var columns = [];


  for (var i = 0; i< Math.ceil(n/2); i++) {
    queens = [new Queen(i,0)];
    columns = [i];

    findNext(queens, columns);

    if (i !== 0 && Math.floor(n/2) === i + 1) {
      solution = solution *2;
    }
  }

  function findNext(queens, columns) {
    if (queens.length === n) {
      solution++;
    } else {
      for (var j = 0; j < n; j++) {
        var row = queens.length;
        var current = new Queen(j, row);
        if (!conflict(queens, current, columns)) {
          arguments.callee(arrayCopy(queens, current), arrayCopy(columns, j));
        }
      }
    }
  }

  function conflict(queens, current, columns) {
    if (columns.indexOf(current.getColumn()) >= 0) {
      return true;
    }
    for (var i in queens) {
      var q = queens[i];
      if (current.isDiagonal(q)) {
        return true;
      }
    }
    return false;
  }

  function arrayCopy(ar, value) {
    var to = ar.slice();
    to.push(value);
    return to;
  }

  return solution;
}

module.exports = board;
