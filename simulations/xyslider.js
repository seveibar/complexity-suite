
$(document).ready(function(){
	
	console.log(playground);

	// Add some test ui elements

	playground.set_title("X Y Mover");

	playground.ui.add_slider("posx",
		0,100);

	playground.ui.add_slider("posy",
		0,100);

	function render(){
		var c = playground.context;
		var w = playground.width;
		var h = playground.height;

		var posx = playground.vars.posx;
		var posy = playground.vars.posy;

		c.fillStyle = "#fff";
		c.fillRect(0,0,w,h);

		c.fillStyle = "#000";
		c.fillRect(posx/100 * w,posy / 100 * h,10,10);

	}

	playground.value_changed = render;

	// Initial Render
	render();

});