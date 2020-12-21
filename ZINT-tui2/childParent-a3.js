/*
for a given individual in our dataset, return their earliest known ancestor -- the one at the farthest distance from the input individual.

If theres more than one ancestor tied for "earliest", return any one. If the input individual has no parents, return null (or -1).

output
findEarliestAncestor(parentChildPairs, 8) => 4
findEarliestAncestor(parentChildPairs, 7) => 4
findEarliestAncestor(parentChildPairs, 6) => 11
findEarliestAncestor(parentChildPairs, 1) => null or -1
*/

let pairs = [[1, 3],[2, 3],[3, 6],[5, 6],[5, 7],[4, 5],[4, 8],[8, 10], [11,2]];
let findEarliestAncestor = function(pairs, vertex) {
  let childParent = new Map();
  for (let pair of pairs) { //O(n)
    if (!childParent.has(pair[1])) childParent.set(pair[1], [pair[0]]); //map op
    else (childParent.get(pair[1]).push(pair[0]));
  }
  if (!childParent.has(vertex)) return -1; //IMportant- edge case for no parent
  let res, max = 0;
  function findParent(curLen, vertex, childParent) {
    if (!childParent.has(vertex)) {
      if (curLen > max) {
        max = curLen;
        res = vertex;
      }
      return;
    }
    let parents = childParent.get(vertex);
    for (let parent of parents) {
      findParent(curLen + 1, parent, childParent);
    }
  }
  findParent(0, vertex, childParent);
  return res;
}

console.log(findEarliestAncestor(pairs,8));