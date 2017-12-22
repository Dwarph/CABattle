function AutomataManager(yearLen, gridBuild) {
  this.yearLength = yearLen;
  this.gridBuilder = gridBuild;
}​


AutomataManager.prototype = {

    constructor: AutomataManager,


    battleLoop: function() {

      for (var y = 0; y < gridBuilder.height; x++) {
        for (var x = 0; x < gridBuilder.width; x++) {
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
              if (x + randCoord > -1 && x + randCoord < gridBuilder.height) {
                battle(meadowBuilder.Grid[x, y], gridBuilder.grid[x + randCoord, y]));
            }
          } else {
            if (y + randCoord > -1 && y + randCoord < gridBuilder.height) {
              StartCoroutine(battle(meadowBuilder.Grid[x, y], meadowBuilder.grid[x, y + randCoord]));
            }
          }
        }
      }
    }
  },

  battle: function() {
    (attackerTile, defenderTile) {
      var attacker = automataList[attackerTile.caNum];
      var defender = automataList[defenderTile.caNum];

      var growthRand = getRandomIntInRange(1, 100) + (attacker.speed / 2);

      if (growthRand > 75) {
        var attackRand = getRandomIntInRange(1, 100);
        if (attacker.attack > defender.defence && attackRand > 20) {
          defenderObj.caNum = attacker;
        }
      }
    }
  }