
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
        blackKing = document.createElement('img')
        blackKing.src = './chesspieces/bK.svg'
        blackKing.draggable = true
        blackKing.id = 'blackKing'
        blackKing.style.maxWidth = "40px";
        blackKing.style.maxHeight = "40px";
        blackKing.ondragstart = (ev) => {
            ev.dataTransfer.setData("text", ev.target.id)
        }

        document.body.appendChild(blackKing)


    }

    chesspieces()
    
    executed = true

    }
}

