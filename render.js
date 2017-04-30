var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
var elements = canvas.width;
var board_height = canvas.height;

function render(){
	ctx.fillStyle = '#000';

	ctx.fillRect(0, 0, Math.round(elements), Math.round(board_height));
	for(var i = 0; i < l.length; i++){
		if(switched[i] == 0){
			ctx.fillStyle = '#f00';
		} else {
			ctx.fillStyle = '#0f0';
		}
		ctx.fillRect(i * 1, 0, 1, l[i]);
	}

	if(!sorted){
		render_timer = setTimeout(render, 17);
	}
}
