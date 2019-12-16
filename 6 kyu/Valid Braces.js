function validBraces(braces){
  const brackets = {
    '(' : ')',
    '<' : '>',
    '{' : '}',
    '[' : ']',
  };
  
  const stack = [];
  
  for (let char of braces) {
    if (char in brackets) {
      stack.push(char)
    } else if (Object.values(brackets).includes(char)) {
      if (stack[stack.length - 1] !==  Object.keys(brackets).find(key => brackets[key] === char)) {
        return false
      } else {
        stack.pop();
      }
    }
  }
  
  return stack.length === 0;
}
