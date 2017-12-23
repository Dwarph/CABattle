var gridBuilder;
var automataManager;
var playerList = [];

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);

  //fun automata:
  // automataList[0] = new Automata(49, 61, 50, '#8eb9ff');
  // automataList[1] = new Automata(50, 61.5, 40, '#d3e4ff');

  automataList[0] = new Automata(1, 1, 1, '#8eb9ff');
  automataList[1] = new Automata(10, 10, 10, '#ff387d');
  automataList[2] = new Automata(10, 11, 9, '#ffe030');

  gridBuilder = new GridBuilder(50, 50, 15);
  gridBuilder.generateGrid();



  //create a player with wasd controls, left shift to place and the CA 1 assigned.
  playerList[0] = new Player(87, 83, 68, 65, 16, 1, gridBuilder, '42f47d');

  //create a player with arrowkey controls, right control to place and the CA 2 assigned.
  playerList[1] = new Player(38, 40, 39, 37, 17, 2, gridBuilder, '42f47d');


  for (var i = 0; i < playerList.length; i++) {
    playerList[i].cursorSetup();
  }

  automataManager = new AutomataManager(500, gridBuilder, 100);

}

function draw() {
  // put drawing code here

  for (var i = 0; i < playerList.length; i++) {
    playerList[i].drawCursor(0, 0);
  }
  automataManager.battleLoop();
  // if (mouseIsPressed) {
  //   gridBuilder.clickCheck();
  // }

}

document.addEventListener("keydown", function(event) {

  if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
    //stop arrowkeys scrolling page
    event.preventDefault();
  }

  for (var i = 0; i < playerList.length; i++) {
    playerList[i].playerControls(event.keyCode);
  }


});