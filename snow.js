// create a canvas element in the page
var canvas = document.createElement("canvas");
canvas.addEventListener("mousemove", function(e) {
	coord(e);
})
var context = canvas.getContext('2d');
canvas.id = "canvas";
context.canvas.width  = window.innerWidth;
context.canvas.height = window.innerHeight;
document.body.appendChild(canvas);

mouseX = 0;
function coord(event) {
	mouseX = event.clientX;
}

// create a Flake array
var FLAKES = 600;
var flakes = [];
for (var i = 0; i < FLAKES; i++) {
	flakes.push(new  Flake());
}

// Loops through flakes array, and updates
// their position and draws flakes
function renderFlakes() {
	context.clearRect(0, 0, canvas.width, canvas.height);
	for (var i = 0; i < flakes.length; i++) {
		flakes[i].update(mouseX);
		flakes[i].draw();
	}
	// console.log(mouseX)
	setTimeout(renderFlakes, 40);
}

// resize canvas element on window resize event
function resizeCanvas() {
	context.canvas.width  = window.innerWidth;
	context.canvas.height = window.innerHeight;
}