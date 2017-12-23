var gridBuilder;
var automataManager;


function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight);
  automataList[0] = new Automata(1, 1, 1, '#fcfc00');
  automataList[1] = new Automata(100, 100, 100, '#7acc57');
  gridBuilder = new GridBuilder(10, 10, 50);
  gridBuilder.generateGrid();
  automataManager = new AutomataManager(500, gridBuilder, 100);

}

function draw() {
  // put drawing code here
  automataManager.battleLoop();

}

function mousePressed() {
  gridBuilder.clickCheck();
}