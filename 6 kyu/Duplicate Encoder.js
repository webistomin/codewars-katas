// The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.

function duplicateEncode(word) {
  let result = '';
  let symbols = word.toLowerCase().split('');
  
  for (let char of word.toLowerCase()) {
    if (symbols.indexOf(char) === symbols.lastIndexOf(char)) {
      result += '(';
    } else {
      result += ')';
    }
  }
  
  return result;
}

console.log(duplicateEncode('recede'));
