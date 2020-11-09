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
var exist = function(board, word) {

  if (!board || board.length==0) return false;
  let letter = 0;

  return dfs(board, 0, 0, curWord='', word);
  function dfs(board, i, j, curWord, word) {
      if (curWord.length == word.length) return true;
      if (i<0 || j<0 || i == board.length - 1 || j == board[0].length - 1) {
          return false;
      }

      if (board[i][j] == word[letter]) {
          curWord + board[i][j];
          letter++;
      } else {
          return false;
      }

      return dfs(board, i+1, j, curWord, word)
      || dfs(board, i, j+1, curWord, word)
      || dfs(board, i-1, j, curWord, word)
      || dfs(board, i, j+1, curWord, word);
  };
};