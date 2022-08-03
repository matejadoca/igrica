let flip = document.querySelector("#flip");
let game = document.querySelector(".game");


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