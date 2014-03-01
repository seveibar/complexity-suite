
var playground = function(){
	return {
		ui : null,
		canvas : null,
		context : null,
		width : 600,
		height : 500
	};
}();

window.onload = function(){
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	context.fillStyle = "#ccc";
	context.fillRect(0,0,600,500);

	playground.canvas = canvas;
	playground.context = context;

	// Add some test ui elements

	playground.ui.add_slider("Time Step",
		0,100);

	playground.ui.add_slider("Speed",
		20,1000);

};