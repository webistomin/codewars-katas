// In this kata, you must create a digital root function.
//
// A digital root is the recursive sum of all the digits in a number. Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. This is only applicable to the natural numbers.

function digital_root(n) {
  let arrOfNums = String(n).split('');
  
  while (arrOfNums.length > 1) {
    let temp = arrOfNums.reduce((sum, item) => sum + Number(item), 0);
    arrOfNums = String(temp).split('')
  }
  
  return Number(arrOfNums[0]);
}

console.log(digital_root(456));
