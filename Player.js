//Player Object for holding Player control details and controlling the Player Input

function Player(kUp, kDown, kRight, kLeft, kPlace, kSwitch, caN, grdBuilder, cursCol) {
  this.keyUp = kUp;
  this.keyDown = kDown;
  this.keyRight = kRight;
  this.keyLeft = kLeft;
  this.keyPlace = kPlace;
  this.keySwitch = kSwitch;
  this.caNum = caN;
  this.gridBuilder = grdBuilder;
  this.cursorColour = cursCol;
  this.grown = false;
  this.state = 0;
  this.activeCell = new createVector(0, 0);
}

Player.prototype = {

  constructor: Player,

  //Draw the player's initial curson at 0,0
  cursorSetup: function() {
    //this.activeCell = new createVector(0, 0);
    this.drawCursor(0, 0);
  },

  //move the cursor depending on the keypressed
  playerKeyPress: function(keyCode) {

    if (keyCode == this.keySwitch) {
      if (this.state == 0) {
        state = 1;
      } else {
        state = 0;
      }
      return;
    }

    switch (this.state) {
      case 0:
        battleStateControlManager(this, keyCode);
        break;
      case 1:
        growStateControlManager(this, keyCode);
        break;
    }
  },

  //draw the cursor
  drawCursor: function(newX, newY) {

    //Firstly redraw the previous tile without the cursor
    var rectTile = this.gridBuilder.grid[this.activeCell.x][this.activeCell.y];
    rectTile.drawTile();

    //get the position of the next tile
    this.activeCell.x += newX;
    this.activeCell.y += newY;

    rectTile = this.gridBuilder.grid[this.activeCell.x][this.activeCell.y];
    //set the cursor thickness
    strokeWeight(2);

    //set the cursor colour (which doesnt seem to work???)
    stroke(this.cursorColour);

    //set the rect to no fill, so the cursor is drawn on top of the sqaure below it
    noFill();

    //draw it !
    rect(rectTile.position.x, rectTile.position.y, this.gridBuilder.scale, this.gridBuilder.scale);
  },


  placeCA: function() {
    //when you place the CA, the game firstly updates it from the CA grower, before placing it
    this.updateCA();
    this.gridBuilder.grid[this.activeCell.x][this.activeCell.y].setCANum(this.caNum);
  },

  //updates the CA from its correct CAGrower
  updateCA: function() {
    if (this.caNum == 4) {
      makeCA(grid[1], this.caNum);
    } else {
      makeCA(grid[2], this.caNum);
    }
  },

  //Set the cursor's active Grid.
  setActiveGrid: function(newGrid) {
    this.gridBuilder = newGrid;
    this.cursorSetup();
  }
}