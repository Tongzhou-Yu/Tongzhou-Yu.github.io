class Node {
	constructor(x, y, z, depth) {
		this.pos = new p5.Vector(x, y, z);
		this.depth = depth;
		this.born = frameCount;
		this.lastStimulation = -Infinity;
		
		this.children = [];
	}
	
	addChildren(n) {
		for (let i = 0; i < n; i ++) {
			if (frameCount === 0 && Math.random() > 1 / this.depth) continue;
			const coords = random([[1, 0,0], 
														 [1 / 2, rt3 / 2,0], 
														 [-1 / 2, rt3 / 2,0], 
														 [-1, 0,0], 
														 [-1 / 2, -rt3 / 2,0], 
														 [1 / 2, -rt3 / 2,0],
														 [0,0,1],
														 [0,0,-1]]),
						x = this.pos.x + 50 * coords[0],
						y = this.pos.y + 50 * coords[1],
						z = this.pos.z + 50 * coords[2];

			if (nodes.some(node => Math.pow(node.pos.x - x, 2) + Math.pow(node.pos.y - y, 2) + Math.pow(node.pos.z - z, 2) < 1)) continue;
      
			const child = new Node(x, y, z, this.depth + 1);
			this.children.push(child);
			nodes.push(child);
			
			if (frameCount === 0) child.addChildren(2);
				
		}
	}
	
	stimulate() {
		this.lastStimulation = frameCount;
		if (Math.random() < 0.5 && frameRate()>24) this.addChildren(1);
	}
	
	draw() {
		push();
		const q = frameCount - this.born;
		stroke(0, q < 50 ? 200 * q / 50: 200, 0);

		const t = frameCount - this.lastStimulation;
		if (t === 10) {
			for (const child of this.children) child.stimulate();
		}
		
		for (const child of this.children) {
			push();
			  stroke(0, 100, 0);
			  line(this.pos.x, this.pos.y, this.pos.z,  child.pos.x, child.pos.y, child.pos.z);
			pop();
			
			if (t < 10) {
				push();
				  strokeWeight(1);
				  fill(50,255,0);
				  translate(this.pos.x + (child.pos.x - this.pos.x) * t / 10, this.pos.y + (child.pos.y - this.pos.y) * t / 10, this.pos.z + (child.pos.z - this.pos.z) * t / 10);
				  box(1.5);
				pop();
			}
			
			child.draw();
		}
		
		fill(t < 30 ? 255 * Math.pow(1.1, -t) : 0);
		translate(this.pos.x, this.pos.y, this.pos.z);
		strokeWeight(1);
		box(15);
		pop();
	}
	//if (depth > 10) save('pix.jpg');
}