// Simple, given a string of words, return the length of the shortest word(s).
//
// String will never be empty and you do not need to account for different data types.

function findShort(s) {
  const arrOfWord = s.split(' ');
  let shortest = arrOfWord[0].length;
  
  arrOfWord.forEach((item) => {
    if (item.length < shortest) {
      shortest = item.length
    }
  });
  
  return shortest
}

console.log(findShort('Waves Mine Classic Steem LiteCoin Factom Bitcoin Mine Ripple Monero Bitcoin 21inc Classic'));
