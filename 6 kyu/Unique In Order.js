const uniqueInOrder = function(iterable) {
  let result = [];
  
  for (let i = 0; i <= iterable.length - 1; i++) {
    if (iterable[i] === iterable[i+1]) {
      continue;
    } else {
      result.push(iterable[i])
    }
  }
  
  return result
};

console.log(uniqueInOrder([1,2,2,3,3]));
