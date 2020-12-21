/*
现在矩阵里多了一种元素1，是宝藏。
-1 is wall cannot pass thru
矩阵由 -1， 0， 1 构成。
问给定一个起始点，再给定一个结束点，找到最短的从start到end的路径，这个路径必须覆盖所有的1。
返回这个最短路径
*/

let grid = [
  ["-1","s","0","0"],
  ["-1","1","-1","-1"],
  ["1","1","1","0"],
  ["0","0","1","e"]
];
let start = [0,1];
let end = [3,3]

class Cell {
  constructor(x, y, parent) {
    this.x = x;
    this.y = y;
    this.parent = parent;
  }
};

let shortestPath = function(grid, start, end) {
  let x = start[0], y = start[1];
  let m = grid.length, n = grid[0].length;

  function findPath(grid, x, y, end) {
    let src = new Cell(x, y, null);
    let que = [src];
    let visited = new Set();
    let key = src.x + "," + src.y;
    visited.add(key);

    while (que.length > 0) {
      let curCell = que.shift();
      let i = curCell.x, j = curCell.y;

      if (i == end[0] && j == end[1]) return curCell; // found destination
      let row = [-1, 0, 0, 1];
      let col = [0, -1, 1, 0];
      for (let k = 0; k < 4; k++) {
        x = i + row[k];
        y = j + col[k];
        // check if it is possible to go from cur pos to next pos
        if (x >= 0 && x < m && y >= 0 && y < n && grid[x][y] != '-1' && grid[x][y] != '0') { //if valid
          let next = new Cell(x, y, curCell); // record xy and curCell(parent)'s relationship
          key = next.x + "," + next.y;
          if (!visited.has(key)) {
            que.push(next);
            visited.add(key);
          }
        }
      }
    }
    return null;
  }

  let res = [];
  let cell = findPath(grid, x, y, end); //{x, y, parent}
  while (cell != null) {
    res.unshift([cell.x, cell.y]);
    cell = cell.parent;
  }
  return res;
}

console.log(shortestPath(grid, start, end));