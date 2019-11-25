// Given two integers a and b, which can be positive or negative, find the sum of all the numbers between including them too and return it. If the two numbers are equal return a or b.
//
//   Note: a and b are not ordered!

function getSum(a, b) {
  if (a === b) {
    return a || b
  }
  
  let sum = 0;
  
  let orderedNum = [a, b].sort((a, b) => a - b);
  
  for (let i = orderedNum[0]; i <= orderedNum[1]; i++) {
    sum += i;
  }
  
  return sum
}
