//A class for a Tile - a lightweight Object simply for displaying the correct grid colour
function Tile(pos, caNo, scl) {
  this.position = pos;
  this.caNum = caNo;
  this.colour = automataList[this.caNum].colour;
  this.scale = scl;
}

Tile.prototype = {
  constructor: Tile,

  //Draw a square at the correct scale
  drawTile: function() {
    strokeWeight(2);
    stroke(this.colour);
    fill(this.colour);
    rect(this.position.x, this.position.y, this.scale, this.scale)
  },

  //set the correct automama to the tile
  setCANum: function(newCA) {
    this.caNum = newCA;
    this.colour = automataList[this.caNum].colour;
    this.drawTile();
  },

  //return the automata
  getCANum: function() {
    return this.caNum;
  }
}