var m = 8;
var n = 8;

var chessboard = new Array(m);

for (i = 0; i < m; i = i + 1) {
 chessboard[i] = new Array(8);
} 


for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
       chessboard[row][col] = col
    }
}

console.log(chessboard[1][3])