window.onload = function() {
	// mouse x coordinate
	mouseX = window.innerWidth/2;

	createCanvas();
	flakes = createFlakes();
	renderFlakes();
}


// create a canvas element in the page
function createCanvas() {
	var canvas = document.createElement("canvas");
	canvas.addEventListener("mousemove", function(e) {
		mouseX = event.clientX;
	});
	canvas.addEventListener("resize", function(e) {
		resizeCanvas();
	});

	context = canvas.getContext('2d');
	canvas.id = "canvas";
	context.canvas.width  = window.innerWidth;
	context.canvas.height = window.innerHeight;
	document.body.appendChild(canvas);
}


// resize canvas element on window resize event
function resizeCanvas() {
	context.canvas.width  = window.innerWidth;
	context.canvas.height = window.innerHeight;
}


// create a Flake array
function createFlakes() {
	var FLAKES = 600;
	var flakes = [];
	for (var i = 0; i < FLAKES; i++) {
		flakes.push(new  Flake());
	}
	return flakes;
}


// Loops through flakes array, and updates
// their position and draws flakes
function renderFlakes() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < flakes.length; i++) {
		flakes[i].update(mouseX);
		flakes[i].draw();
	}
	
	setTimeout(renderFlakes, 40);
}