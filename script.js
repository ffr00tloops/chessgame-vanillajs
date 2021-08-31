executed = false;
document.querySelector("#startGame").onclick = () => {

    window.scrollTo(0,document.body.scrollHeight);

    if (!executed) {
        
    document.querySelector("chessboard").style.gridTemplateColumns = "repeat(8, auto)"

    document.querySelector("chessboard").style.gridTemplateRows = "repeat(8, auto)"
 
    document.querySelector("chessboard").style.display = "grid";

    let change = false;
    let backgroundColor = 'white'

    for ( let i = 0; i < 64; i++) {
        div = document.createElement('div')

        div.className = "square"



        div.id = `square${i + 1}`


        div.style.maxWidth = "71px"
        div.style.minWidth = "71px"
        div.style.maxHeight = "50px"
        div.style.minHeight = "50px"

        change = i % 8 === 0 || i === 0

        backgroundColor = change ? backgroundColor : backgroundColor === 'white' ? 'black' : 'white'

        div.style.backgroundColor = backgroundColor


        backgroundColor === 'white' ? div.style.color = 'black' : div.style.color = 'white'

        div.ondrop = (ev) => {
            ev.preventDefault();
            let data = ev.dataTransfer.getData("text")
            console.log(data)
            if (ev.target.classList.contains("square")) {
                ev.target.innerHTML = ""
                ev.target.appendChild(document.getElementById(data))
            }
            if (ev.target.getAttribute("draggable") == true) {
                ev.target.parentElement.innerHTML = ""
                ev.target.appendChild(document.getElementById(data))
            }

        }

        div.ondragover = (ev) => {
            ev.preventDefault();
        }



        document.querySelector("chessboard").
        appendChild(div)

        change = false;
    }


    // creates the chesspieces when called
    function chesspieces() {

        let chesspiecesname = ["blackKing", "blackBishop","blackKnight","blackPawn","blackQueen","blackRook", "whiteKing", "whiteBishop", "whiteKnight", "whitePawn", "whiteQueen", "whiteRook"]

        let chesspiecesvalue = []

        for (let i = 0; i < chesspiecesname.length; i++) {
            chesspiecesvalue[i] = document.createElement('img')           
        }
        
        //Put chesspieces to their respective areas
        for (let i = 0; i < chesspiecesname.length; i++) {

            if (chesspiecesname[i] == "blackPawn" || chesspiecesname[i] == "whitePawn") {

                Pawn = []
 
                for (let k = 0; k < 8; k++ ) {
                    Pawn[k] = document.createElement('img')
                }

                for (let j =0 ; j < 8; j++) {
                    Pawn[j].id = chesspiecesname[i] + j

                    if (chesspiecesname[i] == "blackPawn")
                    {
                        Pawn[j].src = `./chesspieces/bP.svg`
                    }
                    else {
                        Pawn[j].src = `./chesspieces/wP.svg`
                    }

                    Pawn[j].draggable = true
                    Pawn[j].style.maxWidth = "50px"
                    Pawn[j].style.maxHeight = "50px"
                    Pawn[j].addEventListener("dragstart", dragStart)
                    
                    if (chesspiecesname[i] == "blackPawn") {
                        document.querySelector("chessboard").children.item(j + 8).appendChild(Pawn[j])
                    }
                    else {
                        document.querySelector("chessboard").children.item(j + 48).appendChild(Pawn[j])
                    }

                }                    
                
                
            }


            else if (chesspiecesname[i] == "blackKing" || chesspiecesname[i] == "whiteKing") {
                King = []

                for (let k = 0; k < 1; k++ ) {
                    King[k] = document.createElement('img')
                }

                for (let j =0 ; j < 1; j++) {
                    King[j].id = chesspiecesname[i] + j

                    if (chesspiecesname[i] == "blackKing")
                    {
                        King[j].src = `./chesspieces/bK.svg`
                    }
                    else {
                        King[j].src = `./chesspieces/wK.svg`
                    }
                    King[j].draggable = true
                    King[j].style.maxWidth = "50px"
                    King[j].style.maxHeight = "50px"
                    King[j].addEventListener("dragstart", dragStart)
                    
                    if (chesspiecesname[i] == "blackKing") {
                        document.querySelector("chessboard").children.item(j + 4).appendChild(King[j])
                    }
                    else {
                        document.querySelector("chessboard").children.item(j + 60).appendChild(King[j])
                    }
                }   
            }


            else if (chesspiecesname[i] == "blackBishop" || chesspiecesname[i] == "whiteBishop") {
                Bishop = []

                for (let k = 0; k < 2; k++ ) {
                    Bishop[k] = document.createElement('img')
                }

                for (let j =0 ; j < 2; j++) {
                    Bishop[j].id = chesspiecesname[i] + j

                    if (chesspiecesname[i] == "blackBishop")
                    {
                        Bishop[j].src = `./chesspieces/bB.svg`
                    }
                    else {
                        Bishop[j].src = `./chesspieces/wB.svg`
                    }
                    Bishop[j].draggable = true
                    Bishop[j].style.maxWidth = "50px"
                    Bishop[j].style.maxHeight = "50px"
                    Bishop[j].addEventListener("dragstart", dragStart)
                    
                    if (Bishop[j].id == "blackBishop0") {
                        document.querySelector("chessboard").children.item(2).appendChild(Bishop[j])
                    }
                    else if (Bishop[j].id == "blackBishop1") {
                        document.querySelector("chessboard").children.item(5).appendChild(Bishop[j])
                    }
                    else if (Bishop[j].id == "whiteBishop0") {
                        document.querySelector("chessboard").children.item(58).appendChild(Bishop[j])
                    }
                    else {
                        document.querySelector("chessboard").children.item(61).appendChild(Bishop[j])
                    }
                }   
            }

            else if (chesspiecesname[i] == "blackQueen" || chesspiecesname[i] == "whiteQueen") {
                Queen = []

                for (let k = 0; k < 1; k++ ) {
                    Queen[k] = document.createElement('img')
                }

                for (let j =0 ; j < 1; j++) {
                    Queen[j].id = chesspiecesname[i] + j

                    if (chesspiecesname[i] == "blackQueen")
                    {
                        Queen[j].src = `./chesspieces/bQ.svg`
                    }
                    else {
                        Queen[j].src = `./chesspieces/wQ.svg`
                    }
                    Queen[j].draggable = true
                    Queen[j].style.maxWidth = "50px"
                    Queen[j].style.maxHeight = "50px"
                    Queen[j].addEventListener("dragstart", dragStart)
                    
                    if (chesspiecesname[i] == "blackQueen") {
                        document.querySelector("chessboard").children.item(j + 3).appendChild(Queen[j])
                    }
                    else {
                        document.querySelector("chessboard").children.item(j + 59).appendChild(Queen[j])
                    }
                }
            }

            else if (chesspiecesname[i] == "blackKnight" || chesspiecesname[i] == "whiteKnight") {
                Knight = []

                for (let k = 0; k < 2; k++ ) {
                    Knight[k] = document.createElement('img')
                }

                for (let j =0 ; j < 2; j++) {
                    Knight[j].id = chesspiecesname[i] + j

                    if (chesspiecesname[i] == "blackKnight")
                    {
                        Knight[j].src = `./chesspieces/bN.svg`
                    }
                    else {
                        Knight[j].src = `./chesspieces/wN.svg`
                    }
                    Knight[j].draggable = true
                    Knight[j].style.maxWidth = "50px"
                    Knight[j].style.maxHeight = "50px"
                    Knight[j].addEventListener("dragstart", dragStart)
                    
                    if (Knight[j].id == "blackKnight0") {
                        document.querySelector("chessboard").children.item(1).appendChild(Knight[j])
                    }
                    else if (Knight[j].id == "blackKnight1") {
                        document.querySelector("chessboard").children.item(6).appendChild(Knight[j])
                    }
                    else if (Knight[j].id == "whiteKnight0") {
                        document.querySelector("chessboard").children.item(57).appendChild(Knight[j])
                    }
                    else {
                        document.querySelector("chessboard").children.item(62).appendChild(Knight[j])
                    }
                }
            }

            else if (chesspiecesname[i] == "blackRook" || chesspiecesname[i] == "whiteRook") {

                Rook = []

                for (let k = 0; k < 2; k++ ) {
                    Rook[k] = document.createElement('img')
                }

                for (let j =0 ; j < 2; j++) {
                    Rook[j].id = chesspiecesname[i] + j

                    if (chesspiecesname[i] == "blackRook")
                    {
                        Rook[j].src = `./chesspieces/bR.svg`
                    }
                    else {
                        Rook[j].src = `./chesspieces/wR.svg`
                    }
                    Rook[j].draggable = true
                    Rook[j].style.maxWidth = "50px"
                    Rook[j].style.maxHeight = "50px"
                    Rook[j].addEventListener("dragstart", dragStart)
                    
                    if (Rook[j].id == "blackRook0") {
                        document.querySelector("chessboard").children.item(0).appendChild(Rook[j])
                    }
                    else if (Rook[j].id == "blackRook1") {
                        document.querySelector("chessboard").children.item(7).appendChild(Rook[j])
                    }
                    else if (Rook[j].id == "whiteRook0") {
                        document.querySelector("chessboard").children.item(56).appendChild(Rook[j])
                    }
                    else {
                        document.querySelector("chessboard").children.item(63).appendChild(Rook[j])
                    }
                }
            }
        }

        function dragStart(ev) {
            ev.dataTransfer.setData("text", ev.target.id)
        }

    }

    chesspieces()


    executed = true
    }
}

