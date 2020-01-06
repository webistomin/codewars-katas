function array_diff(a, b) {
  let result = Array.from(a);
  
  for (let i = 0; i <= b.length - 1; i++) {
    while (result.includes(b[i])) {
      result.splice(result.indexOf(b[i]), 1)
    }
  }
  
  return result;
}

console.log(array_diff([1,2,2], [2]));
console.log(array_diff([], [4,5]));
