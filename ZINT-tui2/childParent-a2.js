/* Write a fn that takes the graph, and two of the individuals(), as its inputs and
returns true if and only if they share at least one ancestor.
hasCommonAncestor(parentChildPairs, 3, 8) => false
hasCommonAncestor(parentChildPairs, 5, 8) => true
hasCommonAncestor(parentChildPairs, 6, 8) => true
hasCommonAncestor(parentChildPairs, 1, 3) => false
1   2   4
 \ /   / \
  3   5   8
   \ / \
    6   7
*/
let  hasCommonAncestor = function(input, v1, v2) {
  let vertices = new Set();
  let edges = new Map(); //parent to edges
  for (let pair of input) {
    // 0 is parent, 1 is child store parent to child relationship
    if (!edges.has(pair[0])) edges.set(pair[0], [pair[1]]);
    else (edges.get(pair[0]).push(pair[1]));
  }

  for (let pair of input) {
    //add all vertices to construct the set
    vertices.add(pair[0]);
    vertices.add(pair[1]);
    //for leaf child
    if (!edges.has(pair[1])) edges.set(pair[1], []);
  }

  for (let v of vertices) {
    let q1 = [];
    q1.push(v);
    let currentVisited = new Map(); //track visited
    for (let vertex of vertices) { // for every v of vertives make a new set of currentVisited
      currentVisited.set(vertex, false);
    }
    let v1Visited = false;
    let v2Visited = false;

    while (q1.length > 0) {
      // Check a connected component and see if it has both vertices exists.
      // If it exists, that means they have a common ancestor
      if (v1Visited && v2Visited) return true;

      let cur = q1.pop();
      let adjEdges = edges.get(cur);

      for (let adjV of adjEdges) {
        if (currentVisited.get(adjV) == false) { // not visited yet
          q1.push(adjV);
          currentVisited.set(adjV,true);

          if (adjV == v1) {
            v1Visited = true;
          } else if (adjV == v2) {
            v2Visited = true;
          }
        }
      }
    }
  }
  return false;
}

let input = [[1, 3],[2, 3],[3, 6],[5, 6],[5, 7],[4, 5],[4, 8],[8, 10]];
console.log(hasCommonAncestor(input, 6, 8));