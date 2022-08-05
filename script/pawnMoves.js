/// -------------------------------------------------------PAWNS
let blackPawns = document.querySelectorAll('[src = "images/bp.png"]');
let whitePawns = document.querySelectorAll('[src = "images/wp.png"]');
let blackSquares = document.querySelectorAll('.squareBlack');
let whiteSquares = document.querySelectorAll('.squareWhite');
let totalPieces = document.querySelectorAll('[data-moveCount]');
let totalMoves = document.querySelector('.totalMoves');
let totalMovesCount = 0;

let rightSide = [63, 55, 47, 39, 31, 23, 15];
let leftSide = [56, 48, 40 ,32, 24, 16, 8, 0];
/// --------------------------------------------------------

const changePawn = (side, square, pawn) =>{
	WqueenSrc = "images/wq.png";
	BqueenSrc = "images/bq.png";
	switch(side){
		case "front":
			dataMoveC = pawn.getAttribute("data-moveCount");
			dataMoveClass = pawn.className;
			dataHasMoved = pawn.getAttribute("data-hasMoved");
			dataColor = pawn.getAttribute("data-color");

			changePiece = `<img class="${dataMoveClass}" data-color = "${dataColor}" data-moveCount = "${dataMoveC}" src = ${WqueenSrc} dataHasMoved = "${dataHasMoved}">`

			square.innerHTML = changePiece;
			break;

		case "opposite":
			dataMoveC = pawn.getAttribute("data-moveCount");
			dataMoveClass = pawn.className;
			dataHasMoved = pawn.getAttribute("data-hasMoved");
			dataColor = pawn.getAttribute("data-color");

			changePiece = `<img class="${dataMoveClass}"  data-color = "${dataColor}" data-moveCount = "${dataMoveC}" src = ${BqueenSrc} dataHasMoved = "${dataHasMoved}">`

			square.innerHTML = changePiece;
			break;
	}
}

const movePawn = (side, square, pawn) => { /// ------------------------------------------------------------------- 5 moving pawn

	pawn.className = "nc";
	pawn.setAttribute("data-hasMoved", "Moved");

	countMoves = parseInt(pawn.getAttribute("data-moveCount"))+1;
	pawn.setAttribute("data-moveCount", countMoves);


	/// -----------------------------------------------------------------total moves count
	totalMovesFunc(side);
	/// -----------------------------------------------------------------------------------

	document.querySelectorAll('.circle').forEach((circle)=>{circle.remove();});
	document.querySelectorAll('.circle-capture').forEach((circle)=>{circle.remove();});
	square.appendChild(pawn);

	if(square.parentElement.getAttribute("name")=="1" | square.parentElement.getAttribute("name")=="8"){
		changePawn(side, square, pawn);
	}

	flipFunction();
	


}

/// ----------------------------------------------------------------------------------------------------------------------------------- end
const totalMovesFunc = (side) =>{
	let totalMovesList = [];
	totalPieces.forEach((piece)=>{
		if(parseInt(piece.getAttribute("data-moveCount"))!==0){
			totalMovesList.push(parseInt(piece.getAttribute("data-moveCount")));
		}
	});

	totalMovesCount = totalMovesList.reduce(function(a, b){
       return a + b;
  	  }, 0);
	if (side == "front") {
			totalMoves.innerHTML = `<font size=2><b>BLACK</b></font> <span class="totalMovesC">${totalMovesCount}</span>`;
	}else{
			totalMoves.innerHTML = `<font size=2><b>WHITE</b></font> <span class="totalMovesC">${totalMovesCount}</span>`;
	}

		
}

/// ----------------------------------------------------------------------------------------------------------------------------------- PAWN CAPTURES

const pawnCapture = (side, pawn, squareToCapture) =>{

	squareToCapture.querySelector("img").remove();
	if (side == "w") {
		side="front"
	}else{
		side = "opposite"
	}
	movePawn(side, squareToCapture, pawn);

}

const checkForPiecesCapturesPawn = (side, piece, leftCaptureSqr, rightCaptureSqr) =>{
	
	if (leftCaptureSqr) {
		leftCaptureIMG = leftCaptureSqr.querySelector("img");
	}else{
		leftCaptureIMG = false;
	}

	if (rightCaptureSqr) {
		rightCaptureIMG = rightCaptureSqr.querySelector("img");
	}else{
		rightCaptureIMG = false;
	}

	
	if (side == "w") {
			side="front"
	}else{
			side = "opposite"
	}
	if(canPlay() == side){
		if (side == "front") {
				side="w"
		}else{
				side = "b"
		}
		switch(side){
			case "w":
				if (rightSide.includes(parseInt(piece.previousElementSibling.innerText))) {
					if(leftCaptureIMG){
						if(leftCaptureIMG.getAttribute("data-color") != side){
							let circle = document.createElement("img");
							circle.setAttribute("class", "circle-capture");
							circle.setAttribute("src", "images/circle.png")
							leftCaptureSqr.appendChild(circle);

							circle.addEventListener('click',()=>{pawnCapture(side, piece, leftCaptureSqr)});
						}
					}
				}else if (leftSide.includes(parseInt(piece.previousElementSibling.innerText))) {
					if(rightCaptureIMG){
							if(rightCaptureIMG.getAttribute("data-color") != side){
				
			
								let circle = document.createElement("img");
								circle.setAttribute("class", "circle-capture");
								circle.setAttribute("src", "images/circle.png")
								rightCaptureSqr.appendChild(circle);

								circle.addEventListener('click',()=>{pawnCapture(side, piece, rightCaptureSqr)});

							}
						}
				}else{

					if(leftCaptureIMG){
						if(leftCaptureIMG.getAttribute("data-color") != side){
							
							
							let circle = document.createElement("img");
							circle.setAttribute("class", "circle-capture");
							circle.setAttribute("src", "images/circle.png")
							leftCaptureSqr.appendChild(circle);

							circle.addEventListener('click',()=>{pawnCapture(side, piece, leftCaptureSqr)});
						}
					}
					
					if(rightCaptureIMG){
						if(rightCaptureIMG.getAttribute("data-color") != side){
							
						
							let circle = document.createElement("img");
							circle.setAttribute("class", "circle-capture");
							circle.setAttribute("src", "images/circle.png")
							rightCaptureSqr.appendChild(circle);

							circle.addEventListener('click',()=>{pawnCapture(side, piece, rightCaptureSqr)});

						}
					}
				}

				break;

			case "b":
				if (rightSide.includes(parseInt(piece.previousElementSibling.innerText))) {
						if(rightCaptureIMG){
							if(rightCaptureIMG.getAttribute("data-color") != side){
				
			
								let circle = document.createElement("img");
								circle.setAttribute("class", "circle-capture");
								circle.setAttribute("src", "images/circle.png")
								rightCaptureSqr.appendChild(circle);

								circle.addEventListener('click',()=>{pawnCapture(side, piece, rightCaptureSqr)});

							}
						}
					}else if (leftSide.includes(parseInt(piece.previousElementSibling.innerText))) {
						if(leftCaptureIMG){
							if(leftCaptureIMG.getAttribute("data-color") != side){
								let circle = document.createElement("img");
								circle.setAttribute("class", "circle-capture");
								circle.setAttribute("src", "images/circle.png")
								leftCaptureSqr.appendChild(circle);

								circle.addEventListener('click',()=>{pawnCapture(side, piece, leftCaptureSqr)});
							}
						}
					}else{
						if(leftCaptureIMG){
							if(leftCaptureIMG.getAttribute("data-color") != side){
								
								
								let circle = document.createElement("img");
								circle.setAttribute("class", "circle-capture");
								circle.setAttribute("src", "images/circle.png")
								leftCaptureSqr.appendChild(circle);

								circle.addEventListener('click',()=>{pawnCapture(side, piece, leftCaptureSqr)});
							}
						}
					
					if(rightCaptureIMG){
						if(rightCaptureIMG.getAttribute("data-color") != side){
							
						
							let circle = document.createElement("img");
							circle.setAttribute("class", "circle-capture");
							circle.setAttribute("src", "images/circle.png")
							rightCaptureSqr.appendChild(circle);

							circle.addEventListener('click',()=>{pawnCapture(side, piece, rightCaptureSqr)});

							}
						}
					}

				break;
		}
	}
	

	


}


const checkPawnCaptures = (side, piece) =>{
	

	let id = parseInt(piece.previousElementSibling.innerText);

	if (squares[id-9]) {
		 frontLeftCapture = squares[id-9];	

	}else{
		frontLeftCapture = false;
	}

	if (squares[id-7]) {
		frontRightCapture = squares[id-7]
	}else{
		frontRightCapture = false;
	}

	if (squares[id+9]) {
		oppositeLeftCapture = squares[id+9];
	}else{
		oppositeLeftCapture = false;
	}

	if(squares[id+7]){
		oppositeRightCapture = squares[id+7];
	}else{
		oppositeRightCapture = false;
	}

	
	
	switch(side){
		case "front":
			checkForPiecesCapturesPawn("w", piece, frontLeftCapture, frontRightCapture);
			break;

		case "opposite":
			checkForPiecesCapturesPawn("b", piece, oppositeLeftCapture, oppositeRightCapture);
			break;
	}
}


/// ----------------------------------------------------------------------------------------------------------------------------------- PAWN MOVES


const checkForPiecesBlockingPawn = (side, piece, square, square2) =>{ /// ------------------------------------------ 4 checking if there is a piece in front of pawn
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
const checkLegalMovesPawn = (side, piece, pawnMoveSqr, pawnMoveSqr2) =>{/// ------------------------------------------ 3 checking if pawn has moved and shows legal moves

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

	if ((piece.parentElement.parentElement.getAttribute("name") == "2" | piece.parentElement.parentElement.getAttribute("name") == "7") & piece.getAttribute("data-hasMoved")!="Moved") {
	
				switch(checkForPiecesBlockingPawn("1stmove", piece, pawnMoveSqr, pawnMoveSqr2)){

					case 0:
						checkPawnCaptures(side, piece);
						break;
					case 1:
						
						piece.className = "c";
						if (canPlay()==side) {
							checkPawnCaptures(side, piece);
							pawnMoveSqr.innerHTML += "<img class='circle' src='images/circle.png'>";
							document.querySelector('.circle').addEventListener('click',()=>{movePawn(side, pawnMoveSqr, piece);});
						}
						
						break;
					case 2:
						
						piece.className = "c";
						if (canPlay()==side) {
							checkPawnCaptures(side, piece);
							pawnMoveSqr.innerHTML += "<img class='circle' src='images/circle.png'>";
							pawnMoveSqr2.innerHTML += "<img class='circle' src='images/circle.png'>";
							document.querySelectorAll('.circle')[x].addEventListener('click',()=>{movePawn(side, pawnMoveSqr, piece);});
							document.querySelectorAll('.circle')[y].addEventListener('click',()=>{movePawn(side, pawnMoveSqr2, piece);});
						}
						break;
				}

		}else{

				switch(checkForPiecesBlockingPawn("2ndmove", piece, pawnMoveSqr, pawnMoveSqr2)){

					case 0:
						checkPawnCaptures(side, piece);
						break;
					case 1:
					
						piece.className = "c";
						if (canPlay()==side) {
							checkPawnCaptures(side, piece);
							pawnMoveSqr.innerHTML += "<img class='circle' src='images/circle.png'>";
							document.querySelector('.circle').addEventListener('click',()=>{movePawn(side, pawnMoveSqr, piece);});
						}
						break;
		}
	}
}

const pawnMove = (side, piece) =>{/// ------------------------------------------------------------------------ 2 determines if pawn is clicked or not
	let moves = document.querySelector('[src = "images/circle.png"]');
	let id = parseInt(piece.target.previousElementSibling.innerText);
	let frontPawnMoveSquare = squares[id-8];
	let frontPawnMoveSquare2 = squares[id-16];
	let oppositePawnMoveSquare = squares[id+8];
	let oppositePawnMoveSquare2 = squares[id+16];

	totalPieces.forEach((p)=>{
		p.className = "nc";
	});
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

const showLegalMoves = (pieceName, color, p) =>{ /// ------------------------------------------------------ 1 start
		switch(pieceName, color){
			case "pawn", "w":
				pawnMove("front", p);
				break;

			case "pawn", "b":
				pawnMove("opposite", p);
				break;
		}

}




/// ------------------------------------------------------------------ EVENT LISTENERS
whitePawns.forEach( p => p.addEventListener('click',(p) => {showLegalMoves("pawn","w", p);}));
blackPawns.forEach( p => p.addEventListener('click',(p) => {showLegalMoves("pawn","b", p);}));


