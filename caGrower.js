function gridGrower(gridBuilder) {
  // gridBuilder.grid[50][25].setCANum(1);
  // gridBuilder.grid[50][50].setCANum(2);
  // gridBuilder.grid[50][75].setCANum(3);


  gridBuilder.grid[getRandomIntInRange(0, 99)][getRandomIntInRange(0, 99)].setCANum(1);
  gridBuilder.grid[getRandomIntInRange(0, 99)][getRandomIntInRange(0, 99)].setCANum(2);
  gridBuilder.grid[getRandomIntInRange(0, 99)][getRandomIntInRange(0, 99)].setCANum(3);
}

function makeCA(gridBuilder, caNum) {
  var speed, attack, defence;
  speed = 0;
  attack = 0;
  defence = 0;
  for (var x = 0; x < gridBuilder.width; x++) {
    for (var y = 0; y < gridBuilder.height; y++) {
      switch (gridBuilder.grid[x][y].caNum) {
        case 1:
          defence++;
          break;
        case 2:
          attack++;
          break;
        case 3:
          speed++;
          break;
        default:
          break;
      }
    }
  }

  automataList[caNum] = new Automata(speed / 100, attack / 100, defence / 100, getRandomColor());
  console.log("attack: " + automataList[caNum].getAttack() + ", defence: " + automataList[caNum].getDefence() + ", speed: " + automataList[caNum].getSpeed());
}


function updateCA(gridBuilder, caNum) {
  var speed, attack, defence;
  speed = 0;
  attack = 0;
  defence = 0;
  for (var x = 0; x < gridBuilder.width; x++) {
    for (var y = 0; y < gridBuilder.height; y++) {
      switch (gridBuilder.grid[x][y].caNum) {
        case 1:
          defence++;
          break;
        case 2:
          attack++;
          break;
        case 3:
          speed++;
          break;
        default:
          break;
      }
    }
  }

  automataList[caNum] = new Automata(speed / 100, attack / 100, defence / 100, getRandomColor());
  console.log("attack: " + automataList[caNum].getAttack() + ", defence: " + automataList[caNum].getDefence() + ", speed: " + automataList[caNum].getSpeed());
}