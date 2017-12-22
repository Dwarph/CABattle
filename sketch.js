var gridBuilder;
var automataManager;


function setup() {
  // put setup code here
  gridBuilder = new GridBuilder(10, 10, 0.1);
  gridBuilder.generateGrid();
  automataManager = new AutomataManager(500, gridBuilder, 100);

}

function draw() {
  // put drawing code here


}

function mousePressed() {

}