//Grid builder object which allows you to generate a grid and use mousecontrols (which are no longer used)
//Scale and initialPosition are for p5 drawing (scale is how big, initialPosition is where 0,0 is drawn)

function GridBuilder(wdth, hght, scl, initialPos) {
  this.width = wdth;
  this.height = hght;
  this.scale = scl;
  this.initialPosition = initialPos;
  this.grid = [];
}

GridBuilder.prototype = {

  constructor: GridBuilder,

  //initialise a grid
  // Iterate through the grid size and intialise each grid to the intial CA, then draw it.
  generateGrid: function() {
    const INITIAL_CA = 0;
    var position;

    for (var x = 0; x < this.width; x++) {
      this.grid[x] = [];

      for (var y = 0; y < this.height; y++) {

        //create the coordinate to draw the grid at
        position = createVector((x + this.initialPosition.x) * this.scale, (y + this.initialPosition.y) * this.scale);

        //set the initial CA and Tile
        this.grid[x][y] = new Tile(position, INITIAL_CA, this.scale);

        //draw the Tile
        this.grid[x][y].drawTile();
      }
    }
  }
}

//Click at where the mouse is, and set the Tile to the selected CA (currently 1)
function clickCheck() {
  //    console.log("Clicked!");
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