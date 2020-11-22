/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
  const letters = ["", "", "abc", "def", "ghi", "jkl", "mno", "pqrs", "tuv", "wxyz"];
  let res = [];
  if (digits == '') return res;
  traverse('', 0);
  function traverse(current, idx) {
    if(idx == digits.length){
      res.push(current);
      return;
    }

    let str = letters[digits[idx]];
    for (var i = 0; i < str.length; i++) {
      traverse(current.concat(str[i]), idx + 1);
    }
  }
  return res;
}

console.log(letterCombinations('23'));