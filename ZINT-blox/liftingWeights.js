/*
similar to LC 39. combination sum
*/
let weights = [1,3,5,8];
let maxCapacity = 9;

let maxWeights = function(weights, target) {
  let res = [];
  let max = 0;
  function backtrack(target, start, curMax) {
    if (curMax > target) return;
    if (curMax <= target) {
      if (curMax > max) max = curMax;
    }

    for (let i = start; i < weights.length; i++) {
      backtrack(target, i+1, curMax+weights[i]);
    }
  }
        //target, startIdx, curMax
  backtrack(target, 0, 0);
  return max;
}

console.log(maxWeights(weights,maxCapacity));