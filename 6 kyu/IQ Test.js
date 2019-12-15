function iqTest(numbers) {
  const arrOfNums = numbers.split(' ');
  const evens = [];
  const odds = [];
  
  for (let i = 0; i <= arrOfNums.length - 1; i++) {
    if (Number(arrOfNums[i]) % 2 === 0) {
      evens.push(arrOfNums[i])
    } else {
      odds.push(arrOfNums[i])
    }
  }
  
  if (evens.length > odds.length) {
    return arrOfNums.indexOf(odds[0]) + 1
  } else {
    return arrOfNums.indexOf(evens[0]) + 1
  }
}

console.log(iqTest('1 2 2'));
