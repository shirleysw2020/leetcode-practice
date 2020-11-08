/*
64. Minimum Path Sum
Given a m x n grid filled with non-negative numbers, find a path from top left to bottom right, which minimizes the sum of all numbers along its path.

Note: You can only move either down or right at any point in time.

https://leetcode.com/problems/minimum-path-sum/

Input: grid = [[1,3,1],[1,5,1],[4,2,1]]
Output: 7
Explanation: Because the path 1 → 3 → 1 → 1 → 1 minimizes the sum.
*/


/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!grid) return 0;
  let row = grid.length;
  let column = grid[0].length;

  for (let i = 0; i < row; i++) {
      for (let j = 0; j < column; j++) {
          if (j == 0 && i == 0) {
              continue;
          // add num on right (go across)
          } else if (i == 0) {
              grid[i][j] += grid[i][j - 1];
          // add num above (go down)
          } else if (j == 0) {
              grid[i][j] += grid[i - 1][j];
          // if num is not on top row and leftest column, we replace current num with shortest path by looking at its top and left and add itself to form min path value.
          } else if (i != 0 && j != 0) {
              grid[i][j] = Math.min(grid[i - 1][j], grid[i][j - 1]) + grid[i][j];
          }
      }
  }
  return grid[row-1][column-1];
};