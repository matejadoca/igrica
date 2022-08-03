let rows = document.querySelectorAll(".game .row");
let squares = document.querySelectorAll(".game .row div");



const placeSquare = (s, square, color) => {square[s].className = `square square${color}`;}

const placeFirstRow = (s, square, color) => {
	let position = [`${color}r.png`, `${color}n.png`, `${color}b.png` , `${color}q.png`, `${color}k.png`, `${color}b.png`, `${color}n.png`, `${color}r.png`];
	for(let i = 0;i < 8;i++){
		square[i].innerHTML = `<img class="nc" src="images/${position[i]}">`;
	}
}

const placePawns = (s, square, color) =>{
	for(let i = 0;i < 8;i++){
		square[i].innerHTML = `<img class="nc" src="images/${color}p.png">`;
		
	}
}
/// ---------------------------------------------------------------------------------------------------PLACING
for(let r = 0;r < 8;r++){
	if (r%2==0) {
		square = rows[r].querySelectorAll("div");
		for(let s = 0;s < 8;s++){
			if (s%2==0) {
				placeSquare(s, square, "White"); ///-------------------------square
				switch(r){ ///---------------------------------------------------figures
					case 0:
						placeFirstRow(s, square, "b");
						break;
					case 6:
						placePawns(s, square, "w");
						break;
				}
			}else{
				placeSquare(s, square, "Black"); ///-------------------------square
			}
		}
	}else{
		square = rows[r].querySelectorAll("div");
		for(let s = 0;s < 8;s++){
			if (s%2==0) {
				placeSquare(s, square, "Black"); ///-------------------------square
				switch(r){ ///---------------------------------------------------figures
					case 1:
						placePawns(s, square, "b");
						break;
					case 7:
						placeFirstRow(s, square, "w");
						break;
				}
			}else{
				placeSquare(s, square, "White"); ///-------------------------square
			}
		}
	}
}
/// ------------------------------------------------------------------------------------------------------DELETE
for(let i = 0; i < 64;i++){
	squares[i].innerHTML = `<p style="z-index:10; position:absolute; display:none;">${i}</p>` + squares[i].innerHTML ;
}
