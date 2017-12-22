function GridBuilder(wdth, hght, scl) {
  this.width = wdth;
  this.height = hght;
  this.scale = scl;
}​

GridBuilder.prototype = {

  constructor: GridBuilder,

  grid = [],

  generateGrid: function() {
    const INITIAL_CA = 0;
    var position;
    for (int y = 0; y < height; y++) {
      for (int x = 0; x < width; x++) {
        position = createVector(x * scale, y * scale);
        grid[x][y] = new Tile(pos, automataList[INITIAL_CA].colour, INITIAL_CA);
        grid[x][y].drawTile();
      }
    }
  }
}