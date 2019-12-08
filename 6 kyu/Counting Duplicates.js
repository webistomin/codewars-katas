function duplicateCount(text){
  const countObj = {};
  let count = 0;
  
  for (let char of text) {
    if (!countObj[char.toLowerCase()]) {
      countObj[char.toLowerCase()] = 1;
    } else {
      countObj[char.toLowerCase()] += 1;
    }
  }
  
  Object.values(countObj).forEach((item) => {
    if (item > 1) {
      count++
    }
  });
  
  return count;
}
