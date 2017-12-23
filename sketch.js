var gridBuilder;
var automataManager;


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  automataList[0] = new Automata(1, 1, 1, '#8eb9ff');
  automataList[1] = new Automata(100, 100, 100, '#d3e4ff');
  gridBuilder = new GridBuilder(500, 500, 3);
  gridBuilder.generateGrid();
  automataManager = new AutomataManager(500, gridBuilder, 100);

}

function draw() {
  // put drawing code here
  automataManager.battleLoop();
  if (mouseIsPressed) {
    gridBuilder.clickCheck();
  }

}

function mousePressed() {

}