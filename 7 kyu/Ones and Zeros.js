// Given an array of ones and zeroes, convert the equivalent binary value to an integer.
//

const binaryArrayToNumber = arr => {
  return parseInt(arr.join(''), 2)
};

console.log(binaryArrayToNumber([0,1,1,0]));
