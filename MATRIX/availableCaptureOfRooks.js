let numRookCaptures = function(board) {
  let count = 0;
  rook = findRook(board);

  count += up(0, rook[0], rook[1], board);
  count += right(0, rook[0], rook[1], board);
  count += down(0, rook[0], rook[1], board);
  count += left(0, rook[0], rook[1], board);
  return count;
}
function findRook(board) {
  for (var i = 0; i < board.length; i++) {
    for (let j = 0; j < board[0].length; j++) {
      if (board[i][j] == 'R') return [i, j];
    }
  }
}
function up(ct, i, j, board) {
  while (i-- > 0) {
    if (board[i][j] == 'B')break;
    if (board[i][j] == 'p') {
      ct++;
      break;
    }
  }
    return ct;
}
function down(ct, i, j, board) {
  while (i++ < board.length-1) {
      if (board[i][j] == 'p') {
          ct++;
          break;
      }
      if (board[i][j] == 'B') break;
  }
  return ct;
};
function left(ct, i, j, board) {
  while (j-- > 0) {
      if (board[i][j] == 'p') {
          ct++;
          break;
      }
      if (board[i][j] == 'B') break;
  }
  return ct;
};
function right(ct, i, j, board) {
  while (j++ < board[0].length-1) {
      if (board[i][j] == 'p') {
          ct++;
          break;
      }
      if (board[i][j] == 'B') break;
  }
  return ct;
};

let board = [
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".","R",".",".",".","p"],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".","p",".",".",".","."],
  [".",".",".",".",".",".",".","."],
  [".",".",".",".",".",".",".","."]
];


console.log(numRookCaptures(board));