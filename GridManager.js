// A Class for an Grid Manager - an object which manages a grid.
function GridManager(yearLen, gridBuild, numYrs) {
  this.yearLength = yearLen;
  this.gridBuilder = gridBuild;
  this.numYears = numYrs;
  this.loopDone = false;

  //currently broken code, in the wrong place.
  //TODO: add years to automata using the battleLoop
  var yearCounter = 0;
  while (yearCounter < this.numYears) {
    if (!this.loopDone) {
      //  setTimeout(this.battleLoop(), yearLen);
    }
    //  this.battleLoop();
    yearCounter++;
  }
}


GridManager.prototype = {

  constructor: GridManager,

  //The essence of the game, the battle loop for each iteration
  battleLoop: function() {

    //iterate through each tile in the entire grid
    for (var y = 0; y < this.gridBuilder.height; y++) {
      for (var x = 0; x < this.gridBuilder.width; x++) {
        /*
         * Get a random neighbour tile (A Neighbour is a tile touching, excluding diagonal)
         * Get a random number between 1 & 100
         * Add growth / 2
         * If number is greater than 75, attack
         * if attack > defence
         * AND random num between 1 & 100 is greater than 20
         * attacker wins
         */

        //Get a random neighour tile
        //Get -1, 0, or 1 randomly
        var randCoord = getRandomIntInRange(-1, 1);

        //If it is not 0 (i.e, ourself), battle
        if (randCoord != 0) {

          //apply the random coordinate to the x axis if 1, else y
          var xRand = getRandomIntInRange(0, 1);
          if (xRand) {

            //if we are trying to battle within the grid, then battle
            if (x + randCoord > -1 && x + randCoord < this.gridBuilder.height) {
              this.battle(this.gridBuilder.grid[x][y], this.gridBuilder.grid[x + randCoord][y]);
            }
          } else {

            //if we are trying to battle within the grid, then battle
            if (y + randCoord > -1 && y + randCoord < this.gridBuilder.height) {
              this.battle(this.gridBuilder.grid[x][y], this.gridBuilder.grid[x][y + randCoord]);
            }
          }
        }
      }
    }
    this.loopDone = true;
  },

  //battle function
  battle: function(attackerTile, defenderTile) {

    //if they are the same Cellular Automata, then don't attack!
    if (attackerTile.getCANum() == defenderTile.getCANum()) {
      return;
    }

    //get the attacker and defender
    var attacker = automataList[attackerTile.getCANum()];
    var defender = automataList[defenderTile.getCANum()];

    //get the growth decider
    var growthRand = getRandomIntInRange(1, 100) + (attacker.getSpeed() / 2);

    //if growth is above 75
    if (growthRand > 75) {

      var attackRand = getRandomIntInRange(1, 100);

      //if attack decider is greater than 20 AND the attacker's attack is greater than the defenders defence
      if (attacker.getAttack() > defender.getDefence() && attackRand > 20) {
        defenderTile.setCANum(attackerTile.getCANum());
      }
    }
  }
}