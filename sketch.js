var grid = [];
var automataManagers = [];
var playerList = [];
var sliders = [];

//called initially
function setup() {

  createCanvas(windowWidth, windowHeight);

  //fun automata:
  // automataList[0] = new Automata(49, 61, 50, '#8eb9ff');
  // automataList[1] = new Automata(50, 61.5, 40, '#d3e4ff');

  /*
   * Define 4 Automata
   * 0: the Initial guy. He sucks, he justs sits there and is eaten. More of a background colour
   * 1: This is the Automata which is used for defence in the CA Grower
   * 2: This is the Automata which is used for attack in the CA Grower
   * 3: This is the Automata which is used for speed in the CA Grower
   */
  automataList[0] = new Automata(1, 1, 1, '#8eb9ff');
  automataList[1] = new Automata(49, 61, 50, '#ffe030'); //defence
  automataList[2] = new Automata(50, 62, 40, '#ff387d'); //attack
  automataList[3] = new Automata(49, 61.5, 50, '#3745ff'); //speed
  // automataList[4] = new Automata(10, 10, 10, '#ff387d');
  // automataList[5] = new Automata(10, 11, 9, '#ffe030');

  /*

   * Define Grids
   * 0: the big ol' grid in the middle. The Battleground
   */
  grid[0] = new GridBuilder(50, 50, 15, createVector(30, 0));


  sliders[0] = new Slider(100, 25, '#eaf2ff', '#878fff', '#c3d7f7', '#93bcff', createVector(10, 20));
  //iterate through each grid and generate it, alongside an AutomataManager
  for (var i = 0; i < grid.length; i++) {
    grid[i].generateGrid();
    automataManagers[i] = new GridManager(500, grid[i], 100);
  }
  //create a player with wasd controls, shift to place and the CA 1 assigned.
  playerList[0] = new Player(87, 83, 68, 65, 16, 81, 4, grid[0], '#42f47d');

  //create a player with arrowkey controls, control to place and the CA 2 assigned.
  playerList[1] = new Player(38, 40, 39, 37, 17, 229, 5, grid[0], '#42f47d');

  //setup the cursors for each player
  for (var i = 0; i < playerList.length; i++) {
    playerList[i].cursorSetup();
  }


  for (var i = 0; i < sliders.length; i++) {
    sliders[i].drawSlider(false);
  }
}

function draw() {

  for (var i = 0; i < playerList.length; i++) {
    //draw each cursor, ensuring that they are always visible
    playerList[i].drawCursor(0, 0);
  }

  //iterate through each grid
  for (var i = 0; i < automataManagers.length; i++) {
    //battle !
    automataManagers[i].battleLoop();
  }


  //uncomment to enable mouse controls
  // if (mouseIsPressed) {
  //   gridBuilder.clickCheck();
  // }

}

document.addEventListener("keydown", function(event) {

  if ([32, 37, 38, 39, 40].indexOf(event.keyCode) > -1) {
    //stop arrowkeys scrolling page
    event.preventDefault();
  }

  //on keydown, check to see if one of the players has inputted a relavent key
  for (var i = 0; i < playerList.length; i++) {
    playerList[i].playerKeyPress(event.keyCode);
  }


});