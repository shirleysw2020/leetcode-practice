var sortArray = function(nums) {
  if (nums.length < 2) return nums;

  const middle = Math.floor(nums.length / 2);
  const left = sortArray(nums.slice(0, middle));
  const right = sortArray(nums.slice(middle, nums.length));
  return merge(left, right);
};

function merge(left, right) {
  let leftIdx = 0;
  let rightIdx = 0;
  const result = [];

  while(leftIdx < left.length && rightIdx < right.length) {
      if (left[leftIdx] < right[rightIdx]) {
          result.push(left[leftIdx]);
          leftIdx++;
      } else {
          result.push(right[rightIdx]);
          rightIdx++;
      }
  }

  while(leftIdx < left.length) {
      result.push(left[leftIdx]);
      leftIdx++;
  }
  while(rightIdx < right.length) {
      result.push(right[rightIdx]);
      rightIdx++;
  }
  return result
}

let nums = [7,5,9,10,2,3,1];

console.log(sortArray(nums));