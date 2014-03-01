playground.ui = function(){

	var containers = [];

	// Remove all ui elements
	function reset(){
		_.each(containers, function(container){
			container.remove();
		});
		containers = [];
	}

	// Add a element to the playground display

	function add_slider(name, min, max, callback, initial){
		
		var slider_container = $("<div class='slider-container'></div>"); 
		var slider_text = $("<div class='slider-text'>"+name+"</div>");
		var value_text = $(" <span></span>");

		slider_text.append(value_text);
		slider_container.append(slider_text);


		var slider = $("<div class='slider'></div>");

		slider_container.append(slider);
		$("#control-panel").append(slider_container);

		function updateLabelText(){
			value_text.text(" ["+slider.slider("value")+"]");
		}

		function sliderValueChange(event, ui){

			updateLabelText();

			// Update playground variable
			playground.vars[name] = slider.slider("value");

			// If there was a callback call it
			callback && callback(slider.slider("value"));

			// Let the playground know it will have to redraw
			playground.value_changed();

		}

		slider.slider({
			min : min,
			max : max,
			slide : sliderValueChange
		});

		// Set initial values

		slider.slider("value",(initial || (min + max)/2));
		playground.vars[name] = slider.slider("value");
		updateLabelText();

		containers.push(slider_container);

	}

	return {
		reset : reset,
		add_slider : add_slider,
		add_selection : null
	};
}();