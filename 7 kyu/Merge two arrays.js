// Write a function that combines two arrays by alternatingly taking elements from each array in turn.

function mergeArrays(a, b) {
  const res = [];
  
  const iterateArr = a.length > b.length ? a : b;
  
  iterateArr.forEach((item, index) => {
    
    if (a[index] !== undefined) {
      res.push(a[index])
    }
    if (b[index] !== undefined) {
      res.push(b[index])
    }
    
  });
  
  return res;
}

mergeArrays([1, 2, 3, 4, 5, 6, 7, 8], ['a', 'b', 'c', 'd', 'e']);


