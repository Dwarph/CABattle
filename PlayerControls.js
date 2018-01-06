function growStateControlManager(player, keyCode) {
  if (keyCode == player.keyDown) {

  }

  if (keyCode == player.keyUp) {

  }

  if (keyCode == player.keyLeft) {

  }

  if (keyCode == player.keyRight) {

  }

  if (keyCode == player.keyPlace) {

  }
}

function battleStateControlManager(player, keyCode) {

  if (keyCode == player.keyDown) {
    if (player.activeCell.y + 1 <= player.gridBuilder.height - 1) {
      player.drawCursor(0, 1);
    }
  }

  //Move cursor up
  if (keyCode == player.keyUp)
    if (player.activeCell.y - 1 >= 0) {
      player.drawCursor(0, -1);
    }

  //move cursor left
  if (keyCode == player.keyLeft) {
    if (player.activeCell.x - 1 >= 0) {
      player.drawCursor(-1, 0);
    }
  }

  //move cursor right
  if (keyCode == player.keyRight) {
    if (player.activeCell.x + 1 <= player.gridBuilder.width - 1) {
      player.drawCursor(1, 0);
    }
  }

  //place a CA
  if (keyCode == player.keyPlace) {
    //if the CA is grown, then place it
    player.placeCA();
  }

}