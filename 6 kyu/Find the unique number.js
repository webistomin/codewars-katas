function findUniq(arr) {
  let result = null;
  
  arr.forEach((item) => {
    if (arr.indexOf(item) === arr.lastIndexOf(item)) {
      result =  item
    }
  });
  
  return result
}
