/*
1. Piles of Boxes
Given boxes of different hight, every step you can reduce the tallest boxes to the 2nd tallest’s height. How many steps would it take to make all boxes the same height?
example： [3,2,1] -> [2,2,1] -> [2,1,1] -> [1,1,1]  3 steps

*/

let heights = [5,5,2,2,1];
// let heights = [3,2,1];

let sameHeight = function(heights) {
  heights.sort((a,b) => a-b);
  let steps = 0;
  let n = heights.length;
  let total = 0;
  for (let i = 1; i < n; i++) {
    if (heights[i] != heights[i-1]) {
      steps ++;
      total += steps;
    } else {
      total += steps;
    }
  }
  return total;
}

console.log(sameHeight(heights))