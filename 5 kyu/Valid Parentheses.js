function validParentheses(parens) {
  let stack = [];
  
  for (let char of parens) {
    if (char === '(') {
      stack.push(char)
    } else if (char === ')') {
      if (stack[stack.length - 1] !== '(') {
        return false
      } else {
        stack.pop();
      }
    }
  }
  
  return stack.length <= 0;
};

console.log(validParentheses('()'));
