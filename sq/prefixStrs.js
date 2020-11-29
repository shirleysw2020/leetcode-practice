/*
prefixStrings, 给两个string array, a = [a_1, a_2, ...], b = [b_1, b_2, ...], a_i, b_j都是str, 如果b_j = a[0] + a[1] + ... a[k](连续), 0 <=k < n，那么b_j就是a的一个prefix, 如果所有b_j都是prefix就返回true, 否则false,
*/

let dictionary = ['a', 'b', 'c'];
let combos = ['ab', 'abc', 'abc', 'a'];

let prefixStrings = function(dictionary, combos) {
  let set = new Set();
  let i = 0;
  let temp = '';
  while (i < dictionary.length) {
    temp += dictionary[i];
    set.add(temp);
    i++;
  }

  for (let el of combos) {
    if (!set.has(el)) return false;
  }
  return true;
}

console.log(prefixStrings(dictionary, combos));

// let prices = [2,6,3,4,2,3,6];
// let stock = [0, 1, 1, 1, 1, 1, 1];
// let k = 4