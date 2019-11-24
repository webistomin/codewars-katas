// In this Kata, you will be given a string and your task is to return the most valuable character. The value of a character is the difference between the index of its last occurrence and the index of its first occurrence. Return the character that has the highest value. If there is a tie, return the lexicographically lowest character.
//
//   All inputs will be lower case.

function solve(st) {
  let startIdx = null;
  let endIdx = null;
  let diff = null;
  let mostValuableDiff = 0;
  let mostValuableChar = st[0];
  let map = new Map();
  
  for (let chr of st) {
    if (map.has(chr)) {
      continue;
    } else {
      startIdx = st.indexOf(chr);
      endIdx = st.lastIndexOf(chr);
      diff = endIdx - startIdx;
      map.set(chr, diff);
    }
  }
  
  for (let arr of map.entries()) {
    if (arr[1] > mostValuableDiff) {
      mostValuableDiff = arr[1];
      mostValuableChar = arr[0];
    } else if (arr[1] === mostValuableDiff) {
      if (arr[0] < mostValuableChar) {
        mostValuableChar = arr[0]
      }
    }
  }
  
  return mostValuableChar;
}

console.log(solve('a')); // a
console.log(solve('axyzxyz')); // x
console.log(solve('aabccc')); // c
