var l = [];
var switched = [];
var start, sorted;
var main_timer, render_timer;
var block_increment = (board_height - 1) / (elements - 1);

init();

function shuffle(val){
	for(var i = val.length - 1; i >= 0; i--){
		var j = Math.floor(Math.random() * (i + 1));
		var tmp = val[i];
		val[i] = val[j];
		val[j] = tmp;
	}

	return val;
}

function init(){
	for(var i = 0; i < elements; i++){
		l[i] = Math.round(i * block_increment);
		switched[i] = 0;
	}
	l = shuffle(l);

	start = 0;
	sorted = 0;

	clearTimeout(render_timer);
	clearTimeout(main_timer);

	render();
	main();
}

function main(){
	for(var i = 0; i < switched.length; i++){
		switched[i] = 0;
	}

	sorted = 1;

	start ^= 1;

	for(var i = start; i + 1 < l.length; i += 2){
		if(l[i] > l[i + 1]){
			var tmp = l[i];
			l[i] = l[i + 1];
			l[i + 1] = tmp;
			
			switched[i] = 1;
			switched[i + 1] = 1;

			sorted = 0;
		}
	}

	if(!sorted){
		main_timer = setTimeout(main, 0);
	}
}
