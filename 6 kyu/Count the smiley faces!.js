function countSmileys(arr) {
  let counter = 0;
  const eyes = [';', ':'];
  const noses = ['-', '~'];
  const mouth = [')', 'D'];
  
  arr.forEach((item) => {
    if (item.length === 2) {
      if (eyes.includes(item[0]) && mouth.includes(item[1])) {
        counter++
      }
    } else if (item.length === 3) {
      if (eyes.includes(item[0]) && noses.includes(item[1]) && mouth.includes(item[2])) {
        counter++
      }
    }
  });
  
  return counter;
}

console.log(countSmileys([':D',':~)',';~D',':)']));
