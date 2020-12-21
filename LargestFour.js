function LargestFour(arr) {
  // code goes here
  let sum = 0;
  if (arr.length < 4) {
    for (let num of arr) {
      sum += num;
    }
  } else {
    arr.sort((a,b) => a-b).reverse();
    for (let i = 0; i < 4; i++) {
      sum += arr[i];
    }
  }
  return sum;
}

console.log(LargestFour([1, 4, 8, -5, 9]))