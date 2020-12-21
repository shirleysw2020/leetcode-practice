/*
01grid题，给定一个二维矩阵， 由0和-1构成，-1是墙，0是空地，

第一问，从给定的点出发，向上下左右只走一步，能到达的点坐标， 麻瓜打卡题

?? follow -up : 假如我们只返回是0得点呢？ 如果是-1 墙的话 我们不能到那里去
*/


let grid = [
  ["1","1","1","1","0"],
  ["1","1","0","1","0"],
  ["1","1","0","0","0"],
  ["0","0","0","0","0"]
];
let start = [1,3];

let findNeighborPos = function(grid, start) {
  let x = start[0];
  let y = start[1];

  function isValid(x,y) {
    return (x >= 0
      && y >= 0
      && x < grid.length
      && y < grid[0].length
      && grid[x][y] == '0');
  }

  let neighbors = [];
  if (isValid(x+1,y)) neighbors.push([x+1, y]);
  if (isValid(x-1,y)) neighbors.push([x-1, y]);
  if (isValid(x,y+1)) neighbors.push([x, y+1]);
  if (isValid(x,y-1)) neighbors.push([x, y-1]);
  return neighbors;
}
console.log(findNeighborPos(grid, start));