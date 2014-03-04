
var playground = function(){

	// Restore playground to original state

	function reset(){
		playground.context.fillStyle = "#ccc";
		playground.context.fillRect(0,0,600,500);
		playground.ui.reset();
		playground.value_changed = doNothing;
		playground.vars = {};
	}

	// Sets title of playground (changes html element)

	function set_title(title){
		$("#title-bar").text(title);
	}

	function loadSimulation(simulationName){
		console.log("Called with ",simulationName);
		playground.reset();
		$.getScript("simulations/" + simulationName + ".js");
	}

	function drawCartesianGraph(properties){
		var size = properties.size || {x:10,y:10};
		var offset = properties.offset || {x:0,y:0};
		var axis = properties.axis;

	}

	function doNothing(){};

	return {
		ui : null,
		vars : {},
		canvas : null,
		context : null,
		width : 600,
		height : 500,

		drawCartesianGraph : drawCartesianGraph,

		reset : reset,
		set_title: set_title,
		value_changed : doNothing,
		load : loadSimulation
	};
}();

$(document).ready(function(){

	var canvas = document.getElementById("canvas");
	var context = canvas.getContext('2d');

	playground.canvas = canvas;
	playground.context = context;

	// Autoload simulation from URL bar

	var simulation_name = window.location.href.split("#")[1] || "xyslider";
	
	playground.load(simulation_name);

});