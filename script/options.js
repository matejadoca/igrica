let flip = document.querySelector("#flip");
let game = document.querySelector(".game");
let gameWrapper = document.querySelector(".game-wrapper");



/// --------------------------------------------------FLIP
flip.addEventListener("click", () =>{
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
});

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


/// move order
const checkForPiecePosition = () =>{
	let moved = document.querySelectorAll("[name = 'Moved']")
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
		let moved = document.querySelectorAll("[name = 'Moved']");
		let sumAr = [];
		let sum = 0;
		moved.forEach((m) =>{
			moves = parseInt(m.getAttribute("alt"));
			sumAr.push(moves);
		});
		for(let i = 0; i < sumAr.length; i++){
 			sum += sumAr[i];
		}


		if (sum%2==0) {
	
			return "front";
		}else{

			return "opposite";
		}
	}
	
	
}