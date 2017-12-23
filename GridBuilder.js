function GridBuilder(wdth, hght, scl) {
  this.width = wdth;
  this.height = hght;
  this.scale = scl;
  this.grid = [];
}

GridBuilder.prototype = {

  constructor: GridBuilder,

  generateGrid: function() {
    const INITIAL_CA = 0;
    var position;
    for (var x = 0; x < this.width; x++) {
      this.grid[x] = [];
      for (var y = 0; y < this.height; y++) {
        position = createVector(x * this.scale, y * this.scale);

        this.grid[x][y] = new Tile(position, INITIAL_CA, this.scale);
        this.grid[x][y].drawTile();
      }
    }
  },

  clickCheck() {
    console.log("Clicked!");
    for (var y = 0; y < this.height; y++) {
      for (var x = 0; x < this.width; x++) {
        //if the mouse is inside the Tile and has clicked on it
        //set that square to the active CA
        if (mouseX - this.scale / 2 >= this.grid[x][y].position.x - this.scale / 2 &&
          mouseX - this.scale / 2 <= this.grid[x][y].position.x + this.scale / 2 &&
          mouseY - this.scale / 2 >= this.grid[x][y].position.y - this.scale / 2 &&
          mouseY - this.scale / 2 <= this.grid[x][y].position.y + this.scale / 2) {

          this.grid[x][y].setCANum(1);
        }
      }
    }
  }
}