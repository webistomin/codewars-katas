function nextBigger(n) {
  function getAllPermutations(string) {
    let results = [];
    
    if (string.length === 1) {
      results.push(string);
      return results;
    }
    
    for (let i = 0; i < string.length; i++) {
      let firstChar = string[i];
      let charsLeft = string.substring(0, i) + string.substring(i + 1);
      let innerPermutations = getAllPermutations(charsLeft);
      for (let j = 0; j < innerPermutations.length; j++) {
        results.push(firstChar + innerPermutations[j]);
      }
    }
    return results;
  }
  let result = -1;
  const combinations = getAllPermutations (String(n));
  const nums = combinations.map((item) => Number(item)).sort((a, b) => a - b);
  
  if (n === nums[nums.length - 1]) {
    return -1
  } else {
    for (let i = 0; i <= nums.length - 1; i++) {
      if (nums[i] > n) {
        result = nums[i];
        break;
      }
    }
  }
  
  return result
}

console.log(nextBigger(59884848483559));
