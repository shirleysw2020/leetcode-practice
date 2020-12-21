var calculate = function(s) {
  let result = 0, sign = 1;
  const stack = [], opStack = [];

  for(let i = 0; i < s.length; i++){
      const curr = s[i];
      if(curr === ' ') continue;
      if(curr === '+'){
          sign = 1;
      } else if(curr === '-'){
          sign = -1;
      } else if(!isNaN(curr)){
          let num = curr;
        //   while(i+1 < s.length && s[i+1] >= '0' && s[i+1] <= '9'){
            while(!isNaN(s[i+1]) && i+1 < s.length){
              num += s[i+1];
              i++;
          }
          result += sign * num;
      } else if(curr === '('){
          stack.push(result);
          result = 0;
          opStack.push(sign);
          sign = 1;
      } else if(curr === ')'){
          result = opStack.pop() * result + stack.pop();
          sign = 1;
      }
  }
  return result;
};

let s = "5+((8-4)+7)-10";
console.log(calculate(s));
