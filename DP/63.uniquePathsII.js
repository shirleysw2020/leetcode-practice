/**
 * Input: obstacleGrid = [[0,0,0],[0,1,0],[0,0,0]]
Output: 2
Explanation: There is one obstacle in the middle of the 3x3 grid above.
There are two ways to reach the bottom-right corner:
1. Right -> Right -> Down -> Down
2. Down -> Down -> Right -> Right

 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(grid) {
  let m = grid.length; //cols
  let n = grid[0].length; //rows

  if (grid[0][0] == 1) return 0; //starting cell is obstacle
  grid[0][0] = 1;

  //first col
  for (let i = 1; i < m; i++) {
      grid[i][0] = (grid[i][0] == 0 && grid[i-1][0] == 1) ? 1 : 0;
  }
  //first row
  for (let i = 1; i < n; i++) {
      grid[0][i] = (grid[0][i] == 0 && grid[0][i-1] == 1) ? 1 : 0;
  }

  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
          if (grid[i][j] == 0) { // no obstacle, add previou routes
              grid[i][j] = grid[i-1][j] + grid[i][j-1];
          } else { //there's obstacle
              grid[i][j] = 0;
          }
      }
  }
  return grid[m-1][n-1];
};

/*
Time Complexity: O(M x N)O(M×N). The rectangular grid given to us is of size M x N and we process each cell just once.
Space Complexity: O(1). We are utilizing the obstacleGrid as the DP array. Hence, no extra space.
*/