/*
Given an array of distinct integers candidates and a target integer target, return a list of all unique combinations of candidates where the chosen numbers sum to target. You may return the combinations in any order.

The same number may be chosen from candidates an unlimited number of times. Two combinations are unique if the frequency of at least one of the chosen numbers is different.


Example 1:

Input: candidates = [2,3,6,7], target = 7
Output: [[2,2,3],[7]]
Explanation:
2 and 3 are candidates, and 2 + 2 + 3 = 7. Note that 2 can be used multiple times.
7 is a candidate, and 7 = 7.
These are the only two combinations.
*/

var combinationSum = function(candidates, target) {
  let res = []
  function backTrack(targetRemain, path, startIdx) {
    if (targetRemain < 0) return;

    if (targetRemain == 0) {
      res.push(path);
      return;
    }

    for (let i = startIdx; i < candidates.length; i++) {
      //we can also push candidates[i] into path, and pass the new array instead of using spread operator
      backTrack(targetRemain-candidates[i], [...path, candidates[i]], i)
      // pass in i for startIdx bc we want to try same number again, if that doesn't give us target, it will return. Then we can try next index(next letter)
    }
  }
  backTrack(target, [], 0);
}