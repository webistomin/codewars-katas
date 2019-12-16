// Check to see if a string has the same amount of 'x's and 'o's. The method must return a boolean and be case insensitive. The string can contain any char.

function XO(str) {
  let x = 0;
  let o = 0;
  
  for (let char of str) {
    if (char.toLowerCase() === 'x') {
      x++
    } else if (char.toLowerCase() === 'o') {
      o++
    }
  }
  
  return x === o;
}
