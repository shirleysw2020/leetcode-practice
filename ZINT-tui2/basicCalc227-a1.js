/*
given a string of arithmetic expression (+, -, *, /), find the answer of its operation.
*/
let calculate = function(s) {
  let sign = null;
  let stack = [];
  let num = '';
  for (let i = 0; i <= s.length; i++) {
    let cur = s[i];
    if (cur == ' ') continue;
    if (!isNaN(cur)) num += cur;
    if (isNaN(cur)) {
      // only when we get to next sign - in which we enter this loop , then we consolidate all previous string of num into number. and apply previous sign to it, sign did not change since we didn't enter this loop previously
      num = Number(num);
      switch(sign) {
        case '+':
        case null:
          stack.push(num);
          break;
        case '-':
          stack.push(-num);
          break;
        case '*':
          stack.push(stack.pop() * num);
          break;
        case '/':
          stack.push(parseInt(stack.pop()/num));
          break;
      }
      sign = cur;
      num = '';
    }
  }
  let total = 0;
  for (let num of stack) {
    total += num;
  }
  return total;
}

let s = '8/4';
console.log(calculate(s));