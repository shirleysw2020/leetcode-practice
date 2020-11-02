/*
 * @param {number} x
 * @return {boolean}
 */
// 9. Palindrome Number


var isPalindrome = function(x) {
  let stack = [];
  for (let num of x.toString()) {
      stack.push(num);
  }
  if (stack.length <= 1) return true;

  while (stack.length) {
      let last = stack.pop()
      if (stack[0] !== last) {
          return false;
      }
      stack.shift();
      if (stack.length == 1) {return true;}
  }
      return true;
};