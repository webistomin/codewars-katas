// Given an array, find the integer that appears an odd number of times.
//
// There will always be only one integer that appears an odd number of times.

function findOdd(A) {
  const intMap = {};
  let int = null;
  
  A.forEach((item) => {
    if (!intMap[item]) {
      intMap[item] = 1;
    } else {
      intMap[item] += 1;
    }
  });
  
  Object.entries(intMap).forEach(([key,value])=>{
    if (value % 2 !== 0) {
      int = key
    }
  });
  
  return Number(int);
}

console.log(findOdd([ 20, 1, -1, 2, -2, 3, 3, 5, 5, 1, 2, 4, 20, 4, -1, -2, 5 ])); // 10
