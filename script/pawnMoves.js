/// -------------------------------------------------------PAWNS
let blackPawns = document.querySelectorAll('[src = "images/bp.png"]');
let whitePawns = document.querySelectorAll('[src = "images/wp.png"]');
let blackSquares = document.querySelectorAll('.squareBlack');
let whiteSquares = document.querySelectorAll('.squareWhite');

const movePawn = (square, pawn) => {
	pawn.className = "nc";
	pawn.id = "pawnMoved";
	let circle = document.querySelectorAll('.circle');
	circle.forEach((circle)=>{circle.remove();});
	square.appendChild(pawn);
}


const checkForPiecesBlockingPawn = (side, piece, square, square2) =>{
	switch(side){
		case "1stmove":
			if(square.querySelector("img")){
				return 0;
			}else if(square2.querySelector("img")){
				return 1;
			}else{
				return 2;
			}
			break;
		case "2ndmove":
			if(square.querySelector("img")){
				return 0;
			}else{
				return 1;
			}
			break;
	}
	
	
}
const checkLegalMovesPawn = (side, piece, pawnMoveSqr, pawnMoveSqr2) =>{

	switch(side){
		case "front":
			x=1;
			y=0;
			break;
		case "opposite":
			x=0;
			y=1;
			break;
			
	}

	if ((piece.parentElement.parentElement.getAttribute("name") == "2" | piece.parentElement.parentElement.getAttribute("name") == "7") & piece.id!="pawnMoved") {
	
				switch(checkForPiecesBlockingPawn("1stmove", piece, pawnMoveSqr, pawnMoveSqr2)){

				case 0:
					break;
				case 1:
					pawnMoveSqr.innerHTML += "<img class='circle' src='images/circle.png'>";
					piece.className = "c";
					document.querySelector('.circle').addEventListener('click',()=>{movePawn(pawnMoveSqr, piece);});
					break;
				case 2:
					pawnMoveSqr.innerHTML += "<img class='circle' src='images/circle.png'>";
					pawnMoveSqr2.innerHTML += "<img class='circle' src='images/circle.png'>";
					piece.className = "c";
					document.querySelectorAll('.circle')[x].addEventListener('click',()=>{movePawn(pawnMoveSqr, piece);});
					document.querySelectorAll('.circle')[y].addEventListener('click',()=>{movePawn(pawnMoveSqr2, piece);});
					break;
				}

			}else{

				switch(checkForPiecesBlockingPawn("2ndmove", piece, pawnMoveSqr, pawnMoveSqr2)){

				case 0:
					break;
				case 1:
					pawnMoveSqr.innerHTML += "<img class='circle' src='images/circle.png'>";
					piece.className = "c";
					document.querySelector('.circle').addEventListener('click',()=>{movePawn(pawnMoveSqr, piece);});
					break;
		}
	}
}

const pawnMove = (side, piece) =>{
	let moves = document.querySelector('[src = "images/circle.png"]');
	let id = parseInt(piece.target.previousElementSibling.innerText);
	let frontPawnMoveSquare = squares[id-8];
	let frontPawnMoveSquare2 = squares[id-16];
	let oppositePawnMoveSquare = squares[id+8];
	let oppositePawnMoveSquare2 = squares[id+16];
	if(!moves){
		switch(side){
			case "front":
				switch(piece.target.className){
					case "nc":
						checkLegalMovesPawn("front", piece.target, frontPawnMoveSquare, frontPawnMoveSquare2);
						break;
					case "c":
						piece.target.className = "nc";
						break;
				}
			break;
			
			case "opposite":
				switch(piece.target.className){
					case "nc":
					
						checkLegalMovesPawn("opposite", piece.target, oppositePawnMoveSquare, oppositePawnMoveSquare2 );
						break;
					case "c":
						piece.target.className = "nc";
						break;
				}
			break;
		}

	}else{
		moves.remove();
		pawnMove(side, piece);
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


