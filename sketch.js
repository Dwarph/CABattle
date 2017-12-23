var gridBuilder;
var automataManager;


function setup() {
  // put setup code here

  automataList[0] = new Automata(1, 1, 1, '#fcfc00');
  automataList[1] = new Automata(100, 100, 100, '#7acc57');
  gridBuilder = new GridBuilder(10, 10, 0.1);
  gridBuilder.generateGrid();
  automataManager = new AutomataManager(500, gridBuilder, 100);

}

function draw() {
  // put drawing code here


}

function mousePressed() {
  gridBuilder.clickCheck();
}