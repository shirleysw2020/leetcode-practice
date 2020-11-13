/*
554. Brick Wall Medium

Input: [[1,2,2,1],
        [3,1,2],
        [1,3,2],
        [2,4],
        [3,1,2],
        [1,3,1,1]]

Output: 2
*/

/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function(wall) {
  let map = new Map();
  let max = 0;
  for (let row of wall) {
    let sum = 0;
    for (let i = 0; i < row.length - 1; i++) {
      sum += wall[row][i];
      map.set(sum, (map.get(sum) || 0) + 1);
      max = Math.max(max, map.get(sum));
    }
  }
  return wall.length - max;

};