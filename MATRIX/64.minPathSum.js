/*
64. Minimum Path Sum.   Medium
*/

/**
 * @param {number[][]} grid
 * @return {number}
 */
var minPathSum = function(grid) {
  if (!grid) return 0;
  //need row and column count to access last cell when we return.
  let row = grid.length;
  let col = grid[0].length;

  //intuition: we go from top left to bottom right, so only travel down and right directions
  for (var i = 0; i < row; i++) {
    for (var j = 0; j < col; j++) {
	  // nothing to accumulate yet on upper left corner, we will add this value on next steps
      if (i == 0 && j == 0) {
        continue;
      // find path sums going down and overwrite cell with accummulated path sum
      } else if (i == 0) {
        grid[i][j] += grid[i][j-1];
      // find path sums going right. same as above
      } else if (j == 0) {
        grid[i][j] += grid[i-1][j];
      } else if (i !== 0 && j !== 0) {
        //here we will referene the up and left cell's accumulated value of current cell  and take whichever path with smaller sum from previou steps.
		    //And accumulate as well by adding itself to the shortest path(smallest value)
        grid[i][j] = Math.min(grid[i-1][j], grid[i][j-1]) + grid[i][j];
      }
    }
  }
  return grid[row-1][col-1];
}