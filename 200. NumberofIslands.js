/*
200. Number of Islands.   (medium)

Given an m x n 2d grid map of '1's (land) and '0's (water), return the number of islands.

Example 1:

Input: grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
]
Output: 1
*/

/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
  // destroy an island, or change it's flag when we count it already
  // dfs. need to check all directions
  // have a main function that loop for as long as we are on the 2d map
  // when we enocunter 1 - meaning there's island, we enter dfs and check its neighbors
  let count = 0;
  function checkNeighbors(grid, i, j) {
    //base case
    if (grid[1] && grid[i][j] == '1'
    && i < grid.length && j < grid[0].length) {
      // rewrite/destroy the spot to 0 becase we already looked at it
      grid[i][j] = '0';
      checkNeighbors(grid, i, j+1);
      checkNeighbors(grid, i+1, j);
      checkNeighbors(grid, i, j-1);
      checkNeighbors(grid, i-1, j);
    }
  }

  for (var i = 0; i < grid.length; i++) {
    for (var j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '1') {
        checkNeighbors(grid, i, j);
        count++;
      }
    }
  }
  return count;
};