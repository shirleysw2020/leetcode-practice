/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  let leftMax = -1, rightMax = -1;
  let left = 0, right = height.length - 1;
  let res = 0;

  while (left <= right) {
      leftMax = Math.max(height[left], leftMax);  // 1
      rightMax = Math.max(height[right], rightMax); // 1

      if (leftMax < rightMax) {
          res += leftMax - height[left]
          left++
      } else {
          res += rightMax - height[right]
          right--
      }
  }
  return res
};