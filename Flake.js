/**
* Flake object
* represents a snow flake, having a x position, a y position
* and a random radius to give illusion of depth
*/
function Flake() {
	var width = window.innerWidth;
	var height = window.innerHeight;
	this.x = Math.floor((Math.random() * width)),
	this.y = Math.floor((Math.random() * -900)),
	this.radius = Math.floor((Math.random() * 3) + 1),
	this.speed = Math.floor((Math.random() * 6) + 3);

	// change flake's x position according to mouse x position
	// on the screen
	this.update = function(mouseX) {
		this.y += this.speed;
		var p = (width/2 - mouseX) * 0.01;
		this.x += (mouseX <= width) ? -p : p;
	}

	this.draw = function() {
		// if a flake gets to the bottom of the screen
		// will get a new random position on top of
		// the screen		
		if(this.y >= height) {
			this.x = Math.floor((Math.random() * width));
			this.y = Math.floor((Math.random() * -100));
			this.z = Math.floor((Math.random() * 3) + 1);
		}
		var canvas = document.getElementById("canvas");
		var context = canvas.getContext("2d");
		context.beginPath();
		context.arc(this.x, this.y, this.radius, 0, 2*Math.PI);
		context.fillStyle = "#fff"
      	context.fill();
	}
}