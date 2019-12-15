// Write a function that will find all the anagrams of a word from a list. You will be given two inputs a word and an array with words. You should return an array of all the anagrams or an empty array if there are none.
//

  function anagrams(word, words) {
    let sortedWord = word.split('').sort().join('');
    let res = [];
    
    words.forEach((item) => {
      if (item.split('').sort().join('') === sortedWord) {
        res.push(item)
      }
    });
    
    return res;
  }

console.log(anagrams('abba', ['aabb', 'abcd', 'bbaa', 'dada']));
