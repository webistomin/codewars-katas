function alphabetPosition(text) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let result = [];
  
  for (let char of text) {
    if (alphabet.includes(char.toLowerCase())) {
      result.push(alphabet.indexOf(char.toLowerCase()) + 1)
    }
  }
  
  return result.join(' ').trim();
}

alphabetPosition('The sunset sets at twelve o\' clock.');
