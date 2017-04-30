document.onkeydown = function (e) {
	var keys = {
		81: 'Q',
		87: 'W',
		69: 'E'
	};

	if(keys[e.keyCode] == 'Q'){
		init();
	} else if(keys[e.keyCode] == 'W'){
		if(!sorted){
			clearTimeout(render_timer);
			clearTimeout(main_timer);
		}
	} else if(keys[e.keyCode] == 'E'){
		if(!sorted){
			clearTimeout(render_timer);
			clearTimeout(main_timer);
			render_timer = setTimeout(render, 17);
			main_timer = setTimeout(main, 0);
		}
	}
};

canvas.addEventListener("click", init);
