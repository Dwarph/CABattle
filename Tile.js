function Tile(pos, col, caNo) {
  this.position = pos;
  this.colour = col;
  this.caNum = caNo;
}

Tile.prototype = {
    constructor: Tile,

    grid = [],

    drawTile: function() {
      fill(this.colour);
      rect(30, 20, 55, 55)
    },