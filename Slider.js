function Slider(noOfInc, sze, rct1Col, rct2Col, rct3Col, actvCol, pos) {
  this.noOfIncrements = noOfInc;
  this.sizeY = sze;
  this.sizeX = sze * 10;
  this.rect1Col = rct1Col;
  this.rect2Col = rct2Col;
  this.rect3Col = rct3Col;
  this.activeCol = actvCol;
  this.position = pos;
}

Slider.prototype = {
  drawSlider: function(active) {
    strokeWeight(0);
    fill(this.rect1Col);
    rect(this.position.x, this.position.y, this.sizeX, this.sizeY);

    fill(this.rect2Col);
    rect(this.position.x + (this.sizeX / 20), this.position.y + (this.sizeY / 4), this.sizeX / 1.1, this.sizeY / 2);

    fill(this.rect3Col);
    rect(this.position.x + (this.sizeX / 20), this.position.y + (this.sizeY / 4), this.sizeX / 20, this.sizeY / 2);

  }
}