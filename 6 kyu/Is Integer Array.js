function isIntArray(arr) {
  if (!arr) {
    return false
  }
  
  if (arr && arr.length === 0) {
    return true
  }
  
  return arr.every((el) => typeof el === 'number' && el === Math.floor(el) && !isNaN(el))
}
