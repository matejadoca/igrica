let flip = document.querySelector("#flip");
let game = document.querySelector(".game");
let gameWrapper = document.querySelector(".game-wrapper");



/// --------------------------------------------------FLIP
const flipFunction = () =>{
	if(flip.getAttribute("name")=="not-clicked"){
		rows.forEach((row)=>{
			row.style.flexFlow = "row-reverse";
		});
		game.style.flexFlow = "column-reverse";

		flip.setAttribute("name","clicked");

	}else{
		rows.forEach((row)=>{
			row.style.flexFlow = "row";
		});
		game.style.flexFlow = "column";

		flip.setAttribute("name","not-clicked");
	}
}

flip.addEventListener("click", () =>{
	flipFunction();
});



/// move order
const checkForPiecePosition = () =>{
	let moved = document.querySelectorAll("[data-hasMoved = 'Moved']")
	if (moved.length > 0) {
		return 1;
	}else{
		return 0;
	}

}

const canPlay = () =>{
	
	
	if(checkForPiecePosition()==0){
		return "front";
	}else{
		moves = document.querySelector(".totalMovesC").innerHTML;
		if (moves%2==0) {
	
			return "front";
		}else{

			return "opposite";
		}
	}
	
	
}