var sortArray = function(nums) {
	let len = nums.length;
	if (len < 2) return nums;
	quickSort(nums, 0, len-1);
	return nums;
};

var quickSort = function(nums, start, end){
	if (start >= end) return;
	let left =  start, right = end;
	let pivot = nums[Math.floor((start+end) / 2)];
	while (left <= right) {
		while (left <= right && nums[left] < pivot) {
			left++;
		}
		while (left <= right && nums[right] > pivot) {
			right--;
		}
		if (left <= right) {
      [nums[left], nums[right]] = [nums[right], nums[left]];
			left++;
			right--;
		}
	}
	quickSort(nums, start, right);
	quickSort(nums, left, end);
}


// function sortArray(nums) {
//   let res = [];
//   if (nums.length < 2) return res;
//   quickSort(nums, 0, nums.length - 1);
//   for (let i of nums) res.push(i);
//   return res;
// }
// function quickSort(nums, l, r) {
//   if (l >= r) return;
//   let mid = partition(nums, l, r);
//   quickSort(nums, l, mid);
//   quickSort(nums, mid + 1, r);
// }
// function partition(nums, l, r) {
//   let pivot = nums[l];
//   while (l < r) {
//     while (l < r && nums[r] >= pivot) r--;
//     nums[l] = nums[r];
//     while (l < r && nums[l] <= pivot) l++;
//     nums[r] = nums[l];
//   }
//   nums[l] = pivot;
//   return l;
// }
let nums = [7,5,9,10,2,3,1];

console.log(sortArray(nums));