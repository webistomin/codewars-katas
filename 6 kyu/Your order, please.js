function order(words) {
  let map = {};
  let wordsArray = words.split(' ');
  let indexes = wordsArray.map((el) => Number(el.split('').sort()[0]));
  indexes.forEach((el, index) => {
    map[el] = wordsArray[index];
  });
  return Object.values(map).join(' ');
}

console.log(order("is2 Thi1s T4est 3a"));
