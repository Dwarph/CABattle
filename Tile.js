function Tile(pos, caNo, scl) {
  this.position = pos;
  this.caNum = caNo;
  this.colour = automataList[this.caNum].colour;
  this.scale = scl;
}

Tile.prototype = {
  constructor: Tile,

  drawTile: function() {
    strokeWeight(2);
    stroke(this.colour);
    fill(this.colour);
    rect(this.position.x, this.position.y, this.scale, this.scale)
  },

  setCANum: function(newCA) {
    this.caNum = newCA;
    this.colour = automataList[this.caNum].colour;
    this.drawTile();
  },

  getCANum: function() {
    return this.caNum;
  }
}