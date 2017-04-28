function render(){
	ctx.fillStyle = '#000';

	ctx.fillRect(0, 0, Math.round(elements), Math.round(board_height));
	for(var i = 0; i < l.length; i++){
		if(switched[i] == 0){
			ctx.fillStyle = '#f00';
		} else {
			ctx.fillStyle = '#0f0';
		}
		ctx.fillRect(i * Math.round(board_height / elements), 0, Math.round(board_height / elements), l[i]);
	}

	if(!sorted){
		render_timer = setTimeout(render, 17);
	}
}
