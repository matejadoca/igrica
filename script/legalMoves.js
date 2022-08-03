/// -------------------------------------------------------PAWNS
let blackPawns = document.querySelectorAll('[src = "../images/bp.png"]');
let whitePawns = document.querySelectorAll('[src = "../images/wp.png"]');
let blackSquares = document.querySelectorAll('.squareBlack');
let whiteSquares = document.querySelectorAll('.squareWhite');

const movePawn = (square, pawn) => {
		
	pawn.className = "nc";
	let circle = document.querySelector('.circle');
	circle.remove();
	square.appendChild(pawn);

}


const pawnMove = (side, piece) =>{
	let moves = document.querySelector('[src = "../images/circle.png"]');
	let id = parseInt(piece.target.previousElementSibling.innerText);
	let frontPawnMoveSquare = squares[id-8];
	let oppositePawnMoveSquare = squares[id+8];
	if(!moves){
		switch(side){
			case "front":
				switch(piece.target.className){
					case "nc":
						frontPawnMoveSquare.innerHTML += "<img class='circle' src='../images/circle.png'>";
						piece.target.className = "c";
						let circle = document.querySelector('.circle');
						circle.addEventListener('click',()=>{movePawn(frontPawnMoveSquare, piece.target);})
						break;
					case "c":
						piece.target.className = "nc";
						break;
				}
			break;
			
			case "opposite":
				switch(piece.target.className){
					case "nc":
						oppositePawnMoveSquare.innerHTML += "<img class='circle' src='../images/circle.png'>";
						piece.target.className = "c";
						let circle = document.querySelector('.circle');
						circle.addEventListener('click',()=>{movePawn(oppositePawnMoveSquare, piece.target);})
						break;
					case "c":
						piece.target.className = "nc";
						break;
				}
			break;
		}

	}else{
		moves.remove();
		pawnMove(side,piece);
	}
}

const showLegalMoves = (pieceName, color, p) =>{
		switch(pieceName, color){
			case "pawn", "w":
				pawnMove("front", p);
				break;

			case "pawn", "b":
				pawnMove("opposite", p);
				break;
		}

}



whitePawns.forEach( p => p.addEventListener('click',(p) => {showLegalMoves("pawn","w", p);}));
blackPawns.forEach( p => p.addEventListener('click',(p) => {showLegalMoves("pawn","b", p);}));


