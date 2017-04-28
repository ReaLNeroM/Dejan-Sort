document.onkeydown = function (e) {
	var keys = {
		81: 'Q',
		87: 'W'
	};

	if(keys[e.keyCode] == 'Q'){
		init();
	} else if(keys[e.keyCode] == 'W'){
		clearTimeout(render_timer);
		clearTimeout(main_timer);
	}
};

canvas.addEventListener("click", init);
