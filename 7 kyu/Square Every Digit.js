function squareDigits(num) {
  const digits = String(num).split('');
  let result = '';
  
  digits.forEach((item) => {
    result += String(Math.pow(Number(item), 2))
  });
  
  return Number(result)
}

console.log(squareDigits(9119));
