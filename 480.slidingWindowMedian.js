function binarySearch(arr, target, l, r) {
  while (l < r) {
    const mid = Math.floor((l + r) / 2);
    if (arr[mid] < target)  l = mid + 1;
    else if (arr[mid] > target) r = mid;
    else return mid;
  }
  if (l === r) return arr[l] >= target ? l : l + 1;
}
function medianSlidingWindow(nums, k) {
  let l = 0, r = k - 1, ret = [];
  // Create and sort window
  const window = nums.slice(l, k);
  window.sort((a, b) => a - b);
  while (r < nums.length) {
    // Calculate median and add it to the return array
    const median = k % 2 === 0
      ? (window[Math.floor(k / 2) - 1] + window[Math.floor(k / 2)]) / 2
      : window[Math.floor(k / 2)];
    ret.push(median);
    // Remove char from the left
    let char = nums[l++];//get next number in nums and use binary search to find its sorted place
    let index = binarySearch(window, char, 0, window.length - 1);
    window.splice(index, 1);
    // Add char from the right
    char = nums[++r];
    index = binarySearch(window, char, 0, window.length - 1);
    window.splice(index, 0, char);
  }
  return ret;
}

let nums = [1,3,-1,-3,5,3,6,7];
let k = 3;
console.log(medianSlidingWindow(nums, k));