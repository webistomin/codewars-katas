// Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.

function pigIt(str) {
  const arrOrWords = str.split(' ');
  const resArr = [];
  
  arrOrWords.forEach((item) => {
    if ('!,.?'.indexOf(item) === -1) {
      let temp = item.slice(1);
      resArr.push(temp + item[0] + 'ay');
    } else {
      resArr.push(item)
    }
  });
  
  return resArr.join(' ');
}

console.log(pigIt('Hello world !'));
