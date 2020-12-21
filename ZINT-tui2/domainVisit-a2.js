let users = [
  ["google.com", "bing.com", "apple.com"], // user1
  ["google.com", "stackoverflow", "bing.com", "apple.com"] // user2
]
/*
similar to the longest common substring algorithm.
*/

let longestHistory = function(users) {
  let m = users[0].length;
  let n = users[1].length;
  let common = [];
  let longest = 0;
  let row = 0, col = 0;
  let dp = Array(m+1).fill(0).map(() => Array(n+1).fill(0));

  for (let i = 0; i <= m; i++) {
    for (let j = 0; j <= n; j++) {
      if (i == 0 || j == 0) {
        dp[i][j] = 0;
      } else if (users[0][i-1] == users[1][j-1]) {
        dp[i][j] = dp[i-1][j-1] + 1;
        if (dp[i][j] > longest) {
          longest = dp[i][j]; //update longest
          row = i;
          col = j;
        }
      } else {
        dp[i][j] = 0;
      }
    }
  }
  if (longest == 0) return 'noCommonHistory';
  while (dp[row][col] !== 0) {
    common.unshift(users[0][row-1]);
    row--;
    col--;
  }
  return common;
}

console.log(longestHistory(users));