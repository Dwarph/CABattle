var grid = [];
var automataManagers = [];
var playerList = [];

function setup() {
  // put setup code here

  createCanvas(windowWidth, windowHeight);

  //fun automata:
  // automataList[0] = new Automata(49, 61, 50, '#8eb9ff');
  // automataList[1] = new Automata(50, 61.5, 40, '#d3e4ff');

  automataList[0] = new Automata(1, 1, 1, '#8eb9ff');
  automataList[1] = new Automata(49, 61, 50, '#ffe030'); //defence
  automataList[2] = new Automata(50, 62, 40, '#ff387d'); //attack
  automataList[3] = new Automata(49, 61.5, 50, '#3745ff'); //speed
  // automataList[4] = new Automata(10, 10, 10, '#ff387d');
  // automataList[5] = new Automata(10, 11, 9, '#ffe030');

  grid[0] = new GridBuilder(50, 50, 15, createVector(30, 0));
  grid[1] = new GridBuilder(100, 100, 1.5, createVector(100, 100));
  grid[2] = new GridBuilder(100, 100, 1.5, createVector(900, 100));


  for (var i = 0; i < grid.length; i++) {
    grid[i].generateGrid();
    automataManagers[i] = new AutomataManager(500, grid[i], 100);
    if (i != 0) {
      gridGrower(grid[i]);
    }
  }
  //create a player with wasd controls, left shift to place and the CA 1 assigned.
  playerList[0] = new Player(87, 83, 68, 65, 16, 4, grid[0], '42f47d');

  //create a player with arrowkey controls, right control to place and the CA 2 assigned.
  playerList[1] = new Player(38, 40, 39, 37, 17, 5, grid[0], '42f47d');


  for (var i = 0; i < playerList.length; i++) {
    playerList[i].cursorSetup();
  }



}

function draw() {
  // put drawing code here

  for (var i = 0; i < playerList.length; i++) {
    playerList[i].drawCursor(0, 0);
  }
  for (var i = 0; i < automataManagers.length; i++) {
    automataManagers[i].battleLoop();
  }

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