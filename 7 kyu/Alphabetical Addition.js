// Your task is to add up letters to one letter.
//
//   The function will be given a variable amount of arguments, each one being a letter to add.
//
//   Notes:
//    Letters will always be lowercase.
//    Letters can overflow (see second to last example of the description)
//    If no letters are given, the function should return 'z'


function addLetters(letters) {
  const arrOfLetters = Array.from(arguments);
  
  if (arrOfLetters.length === 0) {
    return 'z';
  }
  
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  let addUp = 0;
  
  arrOfLetters.forEach((letter) => {
    addUp += alphabet.indexOf(letter) + 1;
  });
  
  if (addUp > alphabet.length) {
    addUp = addUp % alphabet.length;
  }
  
  if (addUp === 0) {
    addUp = alphabet.length
  }
  
  return alphabet[addUp - 1];
}
