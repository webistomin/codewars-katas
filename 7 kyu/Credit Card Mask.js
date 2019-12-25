// Your task is to write a function maskify, which changes all but the last four characters into '#'.
//

function maskify(cc) {
  let result = '';
  
  for (let i = 0; i <= cc.length - 5; i++) {
    result+= '#'
  }
  
  return result + cc.slice(-4)
}

console.log(maskify('4556364607935616'));
