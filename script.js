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


        div.style.maxWidth = "55px"
        div.style.minWidth = "50px"
        div.style.maxHeight = "40px"
        div.style.minHeight = "40px"

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

    function chesspieces() {

        let chesspiecesname = ["blackKing", "blackBishop","blackKnight","blackPawn","blackQueen","blackRook", "whiteKing", "whiteBishop", "whiteKnight", "whitePawn", "whiteQueen", "whiteRook"]

        let chesspiecesvalue = []

        for (let i = 0; i < 12; i++) {
            chesspiecesvalue[i] = document.createElement('img')           
        }
        
        for (let i = 0; i < 12; i++) {

            if (chesspiecesname[i] == "blackPawn") {

                blackPawn = []
 
                for (let k = 0; k < 10; k++ ) {
                    blackPawn[k] = document.createElement('img')
                }

                for (let j =0 ; j < 8; j++) {
                    blackPawn[j].id = chesspiecesname[i] + j
                    blackPawn[j].src = `./chesspieces/bP.svg`
                    blackPawn[j].draggable = true
                    blackPawn[j].style.maxWidth = "50px"
                    blackPawn[j].style.maxHeight = "50px"
                    blackPawn[j].addEventListener("dragstart", dragStart)
                    
                    document.querySelector("chessboard").children.item(j + 8).appendChild(blackPawn[j])

                }                    
                
                
            }

            else if(chesspiecesname[i] == "whitePawn") {
                whitePawn = []
 
                for (let k = 0; k < 10; k++ ) {
                    whitePawn[k] = document.createElement('img')
                }

                for (let j =0 ; j < 8; j++) {
                    whitePawn[j].id = chesspiecesname[i] + j
                    whitePawn[j].src = `./chesspieces/wP.svg`
                    whitePawn[j].draggable = true
                    whitePawn[j].style.maxWidth = "50px"
                    whitePawn[j].style.maxHeight = "50px"
                    whitePawn[j].addEventListener("dragstart", dragStart)

                    document.querySelector("chessboard").children.item(j + 48).appendChild(whitePawn[j])

                }
            }

            chesspiecesvalue[i].id = chesspiecesname[i]
            chesspiecesvalue[i].src = `./chesspieces/${chesspiecesname[i].charAt(0)}${chesspiecesname[i].charAt(5)}.svg`
            chesspiecesvalue[i].draggable = true
            chesspiecesvalue[i].style.maxWidth = "50px"
            chesspiecesvalue[i].style.maxHeight = "50px"
            chesspiecesvalue[i].addEventListener("dragstart", dragStart)

        }

        function dragStart(ev) {
            ev.dataTransfer.setData("text", ev.target.id)
        }

    }

    chesspieces()
    
    executed = true

    }
}

