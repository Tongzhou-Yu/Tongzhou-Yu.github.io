// update 20191014 tie node addition to frameRate

let rootNode;
let depth;

const nodes = [],
			rt3 = Math.sqrt(3);

function setup() {
	createCanvas(windowWidth, windowHeight, WEBGL);
  setAttributes('antialias', true);
	createEasyCam({distance:260});
	// suppress right-click context menu
  document.oncontextmenu = function() { return false; };
	strokeWeight(2);

	rootNode = new Node(0, 0, 0, 1);
	nodes.push(rootNode);
	rootNode.addChildren(6);
}

function draw() {
	background(0);
	rotateY(frameCount*.004);
	if (frameCount % 180 === 60) rootNode.stimulate();
	rootNode.draw();
}
