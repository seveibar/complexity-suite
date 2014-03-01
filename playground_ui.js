playground.ui = function(){

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

		slider.slider({
			min : min,
			max : max,
			slide : function (event, ui){
				value_text.text(" ["+slider.slider("value")+"]");
				playground.vars[name] = slider.slider("value");
				callback && callback(slider.slider("value"));
			}
		});

		slider.slider("value",(initial || (min + max)/2));

		value_text.text(" ["+slider.slider("value")+"]");

	}

	return {
		add_slider : add_slider,
		add_selection : null
	};
}();