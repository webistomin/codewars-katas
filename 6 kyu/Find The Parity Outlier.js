function findOutlier(integers) {
  const odd = integers.filter(item => item % 2 !== 0);
  
  if (odd.length === 1) {
    return odd[0]
  } else {
    return integers.filter(item => item % 2 === 0)[0];
  }
}

console.log(findOutlier([1, 2, 3]));
