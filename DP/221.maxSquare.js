/**
 * @param {character[][]} matrix
 * @return {number}
 */
var maximalSquare = function(matrix) {
  if (!matrix || matrix.length == 0) return 0;

  let m = matrix.length;, n = matrix[0].length;
  let dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0));
  let res = 0;

  for (let i = 1; i <= m; i++) {
    for (let j = 1; j <= n; j++) {
      if (matrix[i-1][j-1] == '1') {
        dp[i][j] = Math.min(dp[i][j-1], dp[i-1][j-1],dp[i-1][j]) + 1;
      }
      //update res
      res = Math.max(res, dp[i][j])
    }
  }
  return res * res;
};