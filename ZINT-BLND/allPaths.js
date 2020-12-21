let grid = [
  ['R',1,2],
  [3,4,5],
  [6,7,'O']
];

let allPaths = function(grid) {
  let ct = 0;
  let m = grid.length;
  let n = grid[0].length;
  function findAllPaths(x, y) {
    if (x < 0 || y < 0 || x >= m || y >= n || grid[x][y] == 'seen') {
      return;
    }

    if (grid[x][y] == 'O') {
      ct++;
      return;
    }

    let temp = grid[x][y];
    grid[x][y] = 'seen'; //mark as seen

    // for (let i = 0; i < m; i++) {
    //   for (let j = 0; j < n; j++) {
        findAllPaths(x+1, y); //right
        findAllPaths(x, y+1); //down
        grid[x][y] = temp; //restore
    //   }
    // }
  }
  findAllPaths(0, 0);
  return ct;
}

console.log(allPaths(grid));