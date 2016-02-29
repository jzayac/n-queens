function Queen(x, y) {
  this.x = x;
  this.y = y;
}

Queen.prototype.getPosition = function() {
  return [this.x, this.y];
}

Queen.prototype.getColumn = function() {
  return this.x;
}

Queen.prototype.isDiagonal = function(q) {
  return Math.abs(this.x - q.x) == Math.abs(this.y - q.y)
}

module.exports = Queen;
