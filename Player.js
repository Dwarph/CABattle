//Player Object for holding Player control details and controlling the Player Input

function Player(kUp, kDown, kRight, kLeft, kPlace, caN, grdBuilder, cursCol) {
  this.keyUp = kUp;
  this.keyDown = kDown;
  this.keyRight = kRight;
  this.keyLeft = kLeft;
  this.keyPlace = kPlace;
  this.caNum = caN;
  this.gridBuilder = grdBuilder;
  this.cursorColour = cursCol;
  this.grown = false;
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
  playerControls: function(keyCode) {

    //Move Cursor Down
    if (keyCode == this.keyDown) {
      if (this.activeCell.y + 1 <= this.gridBuilder.height - 1) {
        this.drawCursor(0, 1);
      }
    }

    //Move cursor up
    if (keyCode == this.keyUp)
      if (this.activeCell.y - 1 >= 0) {
        this.drawCursor(0, -1);
      }

    //move cursor left
    if (keyCode == this.keyLeft) {
      if (this.activeCell.x - 1 >= 0) {
        this.drawCursor(-1, 0);
      }
    }

    //move cursor right
    if (keyCode == this.keyRight) {
      if (this.activeCell.x + 1 <= this.gridBuilder.width - 1) {
        this.drawCursor(1, 0);
      }
    }

    //place a CA
    if (keyCode == this.keyPlace) {

      //if the CA has not been grown yet, grow it
      if (!this.grown) {

        // if this is player 1, grow it from from grid 1
        if (this.caNum == 4) {
          makeCA(grid[1], this.caNum);

          //otherwise grow it from grid 2
        } else {
          makeCA(grid[2], this.caNum);
        }
        this.grown = true;
      } else {

        //if the CA is grown, then place it
        this.placeCA();
      }
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