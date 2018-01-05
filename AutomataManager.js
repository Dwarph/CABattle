function AutomataManager(yearLen, gridBuild, numYrs) {
  this.yearLength = yearLen;
  this.gridBuilder = gridBuild;
  this.numYears = numYrs;
  this.loopDone = false;

  var yearCounter = 0;
  while (yearCounter < this.numYears) {
    if (!this.loopDone) {
      //  setTimeout(this.battleLoop(), yearLen);
    }
    //  this.battleLoop();
    yearCounter++;
  }
}


AutomataManager.prototype = {

  constructor: AutomataManager,


  battleLoop: function() {

    for (var y = 0; y < this.gridBuilder.height; y++) {
      for (var x = 0; x < this.gridBuilder.width; x++) {
        /*
         * Loop through surrounding tiles
         * Get a random number between 1 & 100
         * Add growth / 2
         * If number is greater than 75, attack
         * if attack > defence
         * AND random num between 1 & 100 is greater than 20
         * attacker wins
         */

        var randCoord = getRandomIntInRange(-1, 1);
        if (randCoord != 0) {
          var xRand = getRandomIntInRange(0, 1);
          if (xRand == 1) {
            if (x + randCoord > -1 && x + randCoord < this.gridBuilder.height) {
              this.battle(this.gridBuilder.grid[x][y], this.gridBuilder.grid[x + randCoord][y]);
            }
          } else {
            if (y + randCoord > -1 && y + randCoord < this.gridBuilder.height) {
              this.battle(this.gridBuilder.grid[x][y], this.gridBuilder.grid[x][y + randCoord]);
            }
          }
        }
      }
    }
    this.loopDone = true;
  },

  battle: function(attackerTile, defenderTile) {

    if(attackerTile.getCANum() == defenderTile.getCANum()){
      return;
    }
    var attacker = automataList[attackerTile.getCANum()];
    var defender = automataList[defenderTile.getCANum()];

    var growthRand = getRandomIntInRange(1, 100) + (attacker.getSpeed() / 2);

    if (growthRand > 75) {
      //  console.log("ATTACK");
      var attackRand = getRandomIntInRange(1, 100);
      if (attacker.getAttack() > defender.getDefence() && attackRand > 20) {
        defenderTile.setCANum(attackerTile.getCANum());
      }
    }
  }
}
