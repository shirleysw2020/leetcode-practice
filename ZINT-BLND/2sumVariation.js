/*
1. Two Sum variation
Given 2 sorted arrays and a target number, return the indices of the two elements that make up this target (one element from each array). Guaranteed to have such pair.
*/

let a = [2,4,6,8,10]
let b = [4,5,7,8,14];
let target = 24;

//binary search
function find2Sum(a,b,target) {
  let i = 0;
  let j = b.length-1;

  while (i < a.length || j >= 0) {
    if (a[i] + b[j] == target) {
      return [i,j];
    } else if (a[i] + b[j] < target) {
      i++;
    } else {
      j--;
    }
  }
}
console.log(find2Sum(a,b,target));



// slow quadratic time complexity compare every number

// function find2SumSlow(a,b,target) {
//   for (let i = 0; i < a.length; i++) {
//     for (let j = 0; j < b.length; j++) {
//       if (a[i] + b[j] == target) {
//         return [i,j];
//       }
//     }
//   }
// }


// console.log(find2SumSlow(a,b,target));





