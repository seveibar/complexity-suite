
var playground = function(){

	function set_title(title){
		$("#title-bar").text(title);
	}

	return {
		ui : null,
		vars : {},
		canvas : null,
		context : null,
		width : 600,
		height : 500,

		set_title: set_title
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

	playground.set_title("X Y Mover");

	playground.ui.add_slider("Time Step",
		0,100);

	playground.ui.add_slider("Speed",
		20,1000);

};