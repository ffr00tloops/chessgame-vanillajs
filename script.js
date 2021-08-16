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
            ev.target.appendChild(document.getElementById(data))
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
        }




        function dragStart(ev) {
            ev.dataTransfer.setData("text", ev.target.id)
        }

    }

    chesspieces()
    
    executed = true

    }
}

