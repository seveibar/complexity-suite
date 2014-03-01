
var playground = function(){

	// Sets title of playground (changes html element)

	function set_title(title){
		$("#title-bar").text(title);
	}

	function doNothing(){};

	return {
		ui : null,
		vars : {},
		canvas : null,
		context : null,
		width : 600,
		height : 500,

		set_title: set_title,
		value_changed : doNothing
	};
}();

$(document).ready(function(){
	
	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	context.fillStyle = "#ccc";
	context.fillRect(0,0,600,500);

	playground.canvas = canvas;
	playground.context = context;

});