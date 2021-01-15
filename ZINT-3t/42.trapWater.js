(arr) {
  let res = 0;
  let left = 0;
  let right = arr.length-1;
  let leftMax = 0;
  let rightMax = 0;

  while (l <= r) {
    leftMax = Math.max(arr[num], leftMax);
    rightMax = Math.max(arr[num], rightMax);

    if (leftMax > rightMax) {// always do calc on the lesser side bc volume of water is defined by the shorter height
      res += leftMax - arr[num];
      left++;
    } else {
      res += rightMax - arr[num];
      right--;
    }
  }
  return res;
}