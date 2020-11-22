/*
266. Palindrome Permutation
*/

let canPermutePalindrome = function(s) {
  let freq = new Set();
  for (let i = 0; i < s.length; i++) {
    if (freq.has(s[i])) {
      freq.delete(s[i]);
    } else {
      freq.add(s[i]);
    }
  }
  return freq.size <= 1 ? true : false;
}