/*
第二问， 从给定的点出发，能不能到达所有的0， BFS DFS 并查集都可以做
*/

let grid = [
  ["1","1","1","1","0"],
  ["1","0","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
let pos = [3,1];

let findAllZeros = function(grid, start) {
  let queue = [start];
  let count = 0;
  let totalZeros = 0;
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] == '0') totalZeros++;
    }
  }
  function isValid(x, y) {
    return (x >= 0 && y >= 0 && x < grid.length && y < grid[0].length && grid[x][y] == '0');
  }

  while (queue.length) {
    let cur = queue.shift();
    let x = cur[0], y = cur[1];
    if (grid[x][y] == '0') count++; //1
    grid[x][y] = 'seen'; //mark as seen

    if (isValid(x+1, y)) queue.push([x+1, y]); //down
    if (isValid(x-1, y)) queue.push([x-1, y]); //up
    if (isValid(x, y+1)) queue.push([x, y+1]); //right
    if (isValid(x, y-1)) queue.push([x, y-1]); //left
  }
  return count == totalZeros;
}
console.log(findAllZeros(grid, pos));