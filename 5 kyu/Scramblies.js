// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters can be rearranged to match str2, otherwise returns false.

function scramble(str1, str2) {
  let isScramble = true;
  const str1Chars = {};
  const str2Chars = {};
  
  for (let char of str1) {
    if (!str1Chars[char.toLowerCase()]) {
      str1Chars[char.toLowerCase()] = 1;
    } else {
      str1Chars[char.toLowerCase()] += 1;
    }
  }
  
  for (let char of str2) {
    if (!str2Chars[char.toLowerCase()]) {
      str2Chars[char.toLowerCase()] = 1;
    } else {
      str2Chars[char.toLowerCase()] += 1;
    }
  }
  
  Object.entries(str2Chars).forEach(([key, value]) => {
    if (str1Chars[key] < str2Chars[key]) {
      isScramble = false;
    }
    
    if (str1Chars[key] === undefined) {
      isScramble = false;
    }
  });
  
  return isScramble
}

console.log(scramble('katas','steak'));
