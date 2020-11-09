/*
79. Word Search.    Medium
Given a 2D board and a word, find if the word exists in the grid.

The word can be constructed from letters of sequentially adjacent cells, where "adjacent" cells are horizontally or vertically neighboring. The same letter cell may not be used more than once.

Input: board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]], word = "ABCCED"
Output: true
*/

/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */

 /*
Time complexity: O(n)   Specifically: O(N⋅3^L)
   where N is the number of cells in the board and L is the length of the word to be matched.

Space complexity: O(L)
  where L is the length of the word to be matched.

  The main consumption of the memory lies in the recursion call of the backtracking function. The maximum length of the call stack would be the length of the word. Therefore, the space complexity of the algorithm is O(L).
*/
var exist = function(board, word) {
  if (!board || board.length==0) return false;
  let count = 0;
  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          if (board[i][j] == word[0] && dfs(board, i, j, 0, word)) {
              return true;
          }
      }
  }
  return false;

  return dfs(board, 0, 0, 0, word);
  function dfs(board, i, j, count, word) {
    if (count == word.length) return true;
    if (i<0 || j<0 || i >= board.length || j >= board[0].length || board[i][j] !== word[count]) {
        return false;
    }

    let temp = board[i][j];
    board[i][j] = ' ';

    let found = dfs(board, i+1, j, count+1, word)
    || dfs(board, i-1, j, count+1, word)
    || dfs(board, i, j+1, count+1, word)
    || dfs(board, i, j-1, count+1, word);

    // restore previous value in board
    board[i][j] = temp;
    return found;
  };
};