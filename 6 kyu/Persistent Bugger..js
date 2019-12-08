// Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence, which is the number of times you must multiply the digits in num until you reach a single digit.

function persistence(num) {
  let splittedNum = String(num).split('');
  let counter = 0;
  
  while (splittedNum.length > 1) {
    let temp = 1;
    
    splittedNum.forEach((item) => {
      temp *= Number(item)
    });
    
    splittedNum = String(temp).split('');
    counter++;
  }
  
  return counter
}

console.log(persistence(4));
