/*
Given an array of distinct integers candidates and a target integer, return a list of all unique combinations of candidates where the chosen numbers sum to target.

The same number may be used unlimited times. Two combinations are unique if the frequency of at least one of the numbers is different.

It is guaranteed that the number of unique combinations that sum up to target is less than 150 combinations for the given input.
*/

//use backtracking, this is simular to subset, permutation, use DFS
//DFS is the special form of backtracking; backtracking is the general form of DFS
//"backtrack" is just a simpler way to do the DFS as you don't have a "todo" queue. When a vertex is fully explore, you just go back in the exploration tree. Of course, it is less efficient than DFS as you will run the exploration loop several times on some vertex.
let candidates = [2,3,6,7];
let target = 7;

let findCombinationSum = function(candidates, target) {
  let res = [];
  function backtrack(remain, start, path) {
    if (remain < 0) return;
    if (remain == 0) {
      res.push(path);
    }

    for (let i = start; i < candidates.length; i++) {
      backtrack(remain-candidates[i], i, [...path, candidates[i]]);
    }
  }
  backtrack(target, 0, []);
  return res;
}

console.log(findCombinationSum(candidates,target));