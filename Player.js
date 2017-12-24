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
}

Player.prototype = {

  constructor: Player,

  cursorSetup: function() {
    this.activeCell = new createVector(0, 0);
    this.drawCursor(0, 0);
  },

  playerControls: function(keyCode) {


    if (keyCode == this.keyDown) {
      if (this.activeCell.y + 1 <= this.gridBuilder.height - 1) {
        this.drawCursor(0, 1);
      }
    }

    if (keyCode == this.keyUp)
      if (this.activeCell.y - 1 >= 0) {
        this.drawCursor(0, -1);
      }



    if (keyCode == this.keyLeft) {
      if (this.activeCell.x - 1 >= 0) {
        this.drawCursor(-1, 0);
      }
    }


    if (keyCode == this.keyRight) {
      if (this.activeCell.x + 1 <= this.gridBuilder.width - 1) {
        this.drawCursor(1, 0);
      }
    }

    if (keyCode == this.keyPlace) {
      if (!this.grown) {
        if (this.caNum == 4) {
          makeCA(grid[1], this.caNum);
        } else {
          makeCA(grid[2], this.caNum);
        }
        this.grown = true;
      } else {
        this.placeCA();
      }
    }
  },

  drawCursor: function(newX, newY) {

    var rectTile = this.gridBuilder.grid[this.activeCell.x][this.activeCell.y];
    rectTile.drawTile();

    this.activeCell.x += newX;
    this.activeCell.y += newY;

    rectTile = this.gridBuilder.grid[this.activeCell.x][this.activeCell.y];

    strokeWeight(2);
    stroke(this.cursorColour);
    noFill();
    rect(rectTile.position.x, rectTile.position.y, this.gridBuilder.scale, this.gridBuilder.scale);
  },

  placeCA: function() {
    this.updateCA();
    this.gridBuilder.grid[this.activeCell.x][this.activeCell.y].setCANum(this.caNum);
  },

  updateCA: function() {
    if (this.caNum == 4) {
      makeCA(grid[1], this.caNum);
    } else {
      makeCA(grid[2], this.caNum);
    }
  },

  setActiveGrid: function(newGrid) {
    this.gridBuilder = newGrid;
    this.cursorSetup();
  }


}