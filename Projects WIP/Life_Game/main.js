let grid,
		nextGrid,
		cols,
		rows,
		slider;

const live = [2, 3], // How many neighbors does a cell require to stay alive?
		  born = [3], // How many neighbors does a cell require to be born?
			ticksPerSecond = 50,
			cellSize = 7,
			neighbors = [],
			
			offsetY = 20;

function setup() {
	cols = 96;
	rows = 54;

	createCanvas(cols * cellSize, rows * cellSize + offsetY);
	frameRate(ticksPerSecond);
	noStroke();
	fill(255);
	
	grid = Array(cols * rows);
	nextGrid = Array(cols * rows);
	
	const indexOf = (x, y) => (y < 0 ? rows + y : y % rows) * cols + (x < 0 ? cols + x : x % cols);
	
	for (let i = 0; i < grid.length; i ++) {
		grid[i] = Math.random() < 0.5;
		
		const x = i % cols,
					y = Math.floor(i / cols);

		neighbors[i] = [
			indexOf(x - 1, y - 1),
			indexOf(x    , y - 1),
			indexOf(x + 1, y - 1),
			indexOf(x - 1, y    ),
			indexOf(x + 1, y    ),
			indexOf(x - 1, y + 1),
			indexOf(x    , y + 1),
			indexOf(x + 1, y + 1)
		];
	}
	
	slider = new Slider(10, 10, 0.7, "Fade");
	
	background(50);
}

function draw() {
	for (let i = 0; i < grid.length; i ++) {
		// /*const*/ adj = neighbors[i].filter(k => grid[k]).length;  // number of live adjacent cells
		
		adj = 0;
		for (let k of neighbors[i]) {
			if (grid[k]) adj ++;
		}
		
		if(grid[i] && !live.includes(adj)) nextGrid[i] = false;
		else if(!grid[i] && born.includes(adj)) nextGrid[i] = true;
		else nextGrid[i] = grid[i];
	}

	const temp = grid;
	grid = nextGrid;
	nextGrid = temp;

	fill(50, 255 * (1 - slider.v));
	rect(0, 0, width, height);
	
	fill(255);
	for(let i = 0; i < grid.length; i ++) {
		if (grid[i]) rect(i % cols * cellSize, Math.floor(i / cols) * cellSize + offsetY, cellSize, cellSize);
	}
	
	slider.tick();
}