const snail = (array) => {
  let result = [];
  
  while(array.length > 2) {
    result.push(...array.shift());
    for(let i = 0; i <= array.length - 1; i++) {
      result.push(array[i].pop());
    }
    console.log(array);
    result.push(...(array.pop() || []).reverse());
    for(let i = array.length - 1; i >= 0; i--) {
      result.push(array[i].shift())
    }
  }
  
  return result;
};

console.log(snail([[1, 2, 3], [4, 5, 6], [7, 8, 9]]));
