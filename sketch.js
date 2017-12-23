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
  automataList[1] = new Automata(10, 10, 10, '#d3e4ff');

  gridBuilder = new GridBuilder(50, 50, 15);
  gridBuilder.generateGrid();




  playerList[0] = new Player(87, 83, 68, 65, 16, 1, gridBuilder, '42f47d');


  for (var i = 0; i < playerList.length; i++) {
    playerList[i].cursorSetup();
  }

  automataManager = new AutomataManager(500, gridBuilder, 100);

}

function draw() {
  // put drawing code here
  automataManager.battleLoop();
  // if (mouseIsPressed) {
  //   gridBuilder.clickCheck();
  // }

}

document.addEventListener("keydown", function(event) {
  for (var i = 0; i < playerList.length; i++) {
    playerList[i].playerControls(event.keyCode);
  }
});