/*
Write a function that takes this data as input and returns two collections:
one containing all individuals with zero known parents,
one containing all individuals with exactly one known parent.

findNodesWithZeroAndOneParents(parentChildPairs) =>
  [ [1, 2, 4],    // Individuals with zero parents
  [5, 7, 8, 10] // Individuals with exactly one parent ]

input data describing a graph of relationships between parents and children over multiple generations.
The data is formatted as a list of (parent, child) pairs, where each individual is assigned a unique integer identifier.

For example, in this diagram, 3 is a child of 1 and 2, and 5 is a child of 4:
parentChildPairs = [ (1, 3), (2, 3), (3, 6), (5, 6),
                    (5, 7), (4, 5), (4, 8), (8, 10) ]
*** only exist on parent side - is individla with 0 parents
*** appear in child only one time has only one parent

*/
let findNodesWithZeroAndOneParents = function(input) {
  let numOfParent =new Map(); //find one parent
  let zeroParent = new Set();
  let res = [[],[]];

  for (let i = 0; i < input.length; i++) {
    if (numOfParent.has(input[i][1])) {
      numOfParent.set(input[i][1], numOfParent.get(input[i][1])+1);
    } else {
      numOfParent.set(input[i][1], 1);
    }
    zeroParent.add(input[i][0]);// will check later if the key exist in numOfParent
  }

  for (let val of zeroParent) {
    if (!numOfParent.has(val)) res[0].push(val);
  }

  for (let [key, val] of numOfParent) {
    if (val == 1) res[1].push(key);
  }
  return res;
}


let input = [[1, 3],[2, 3],[3, 6],[5, 6],[5, 7],[4, 5],[4, 8],[8, 10]];
console.log(findNodesWithZeroAndOneParents(input));