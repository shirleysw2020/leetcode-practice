/*
289. Game of Life
*/

/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
  /*
  psuedocode:
  for every cell in board, check its 8 neighbor cells and count the cells(2nd func)
  if cur cell is 1(alive) and the neighbor ct is <2 or >3 then we set cell to 2-make it edad
  if cur cell is 0(dead) and the neighbor ct is 3 then we set cell to 3-make it alive
  loop thru all cell again, %2 to set the cell val
  */

  if (!board || board.length == 0) return null;

  for (let i = 0; i<board.length; i++) {
      for (let j = 0; j<board[0].length; j++) {
          let lives = countLife(board, i, j);
          if (board[i][j] == 1 && (lives < 2 || lives > 3)) {
              board[i][j] = 2; //set to 2 bc 2%2 is 0 so these become dead as we wish
          }
          if (board[i][j] == 0 && lives == 3) {
              board[i][j] = 3; //set to 3 bc 3%2 is 1 so these become alive as we wish
          }
      }
  }

  for (let i = 0; i < board.length; i++) {
      for (let j = 0; j < board[0].length; j++) {
          board[i][j] = board[i][j] % 2;
      }
  }

  function countLife(board, i, j) {
      let count = 0;
      //all 8 directions
      let idx = [[-1,0],[1,0],[0,1],[0,-1],[1,1],[-1,-1],[1,-1],[-1,1]];
      for (let el of idx) {
          // if off the grid, skip
          if (el[0]+i < 0 || el[0]+i > board.length-1 || el[1]+j < 0 || el[1]+j > board[0].length-1) continue;
          // 2 is also alive becuase theose are cells turned dead to alive
          if (board[el[0]+i][el[1]+j] == 1 || board[el[0]+i][el[1]+j] == 2) {
              count++;
          }
      }
      return count;
  }

};