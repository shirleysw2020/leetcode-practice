/*
79. word search medium
*/
// space is O(L) where L is the length of the word;
// time is O(M * N * 4^L) where M*N is the board size and we have 4^L for each cell bc of recursion. Of course this would be an upper bound.

var exist = function(board, word) {
  let n = board.length, m = board[0].length, count = 0;
  let path = [];
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < m; j++) {
      // this line is important we only return true if we found it, if we didn't find it by calling dfs, we should not exit these for-loops, we want to keep searching... until we cannot find in all cells then we exit and return false.
      // if (board[i][j] == word[0] && dfs(board, word, i, j, 0, path)) {
      //   // return true;
      // }
      if (board[i][j] == word[0]) {
        return dfs(board, word, i, j, 0, path);
      }
    }
  }
  //likewise, we exited forloops and return false if we were not able to return true(aka find the word) inside the for-loop
  // return false;

  function dfs(board, word, i, j, ct, path) {
    //order matters, we must check this condition first, so when we reach word lenth we exit right away with return true
    if (word.length == ct) return true;

    if (i<0 || j<0 || i>=n || j>=m || word[ct] !== board[i][j]) {
      return false;
    }

    let temp = board[i][j];
    board[i][j] = ' ';
    path.push([i,j])

    let found = dfs(board, word, i, j+1, ct+1, path)
    // || dfs(board, word, i, j-1, ct+1, path)
    || dfs(board, word, i+1, j, ct+1, path)
    // || dfs(board, word, i-1, j, ct+1, path);

    board[i][j] = temp;
    // return found;
    return found ? path : false;
  }
};

let board = [["A","B","C","E"],
            ["S","F","C","S"],
            ["A","D","E","E"]];
let word = "ASFCSE"
console.log(exist(board, word));