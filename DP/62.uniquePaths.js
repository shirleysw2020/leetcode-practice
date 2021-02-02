/*
A robot is located at the top-left corner of a m x n grid (marked 'Start' in the diagram below).

The robot can only move either down or right at any point in time. The robot is trying to reach the bottom-right corner of the grid (marked 'Finish' in the diagram below).

How many possible unique paths are there?

Example 1:
Input: m = 3, n = 7
Output: 28

Example 2:
Input: m = 3, n = 2
Output: 3
Explanation:
From the top-left corner, there are a total of 3 ways to reach the bottom-right corner:
1. Right -> Down -> Down
2. Down -> Down -> Right
3. Down -> Right -> Down
*/

/**
 * @param {number} m
 * @param {number} n
 * @return {number}
 */
var uniquePaths = function(m, n) {
  //dp pattern: make a nested arr since our input is matrix w/ l and w one more than given
  let dp = Array(m+1).fill(1).map(() => Array(n+1).fill(1));

  for (let i = 1; i < m; i++) {
      for (let j = 1; j < n; j++) {
        //current cell = top([i-1]) + left([j-1]) since robot only travel those 2 directions
        dp[i][j] = dp[i-1][j] + dp[i][j-1];
      }
  }

  return dp[m-1][n-1];
};

console.log(uniquePaths(3,7));