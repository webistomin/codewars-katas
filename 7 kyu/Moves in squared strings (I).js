// This kata is the first of a sequence of four about "Squared Strings".
//
//   You are given a string of n lines, each substring being n characters long: For example:
//
//   s = "abcd\nefgh\nijkl\nmnop"
//
// We will study some transformations of this square of strings.
//
//   Vertical mirror: vert_mirror (or vertMirror or vert-mirror)
// vert_mirror(s) => "dcba\nhgfe\nlkji\nponm"
// Horizontal mirror: hor_mirror (or horMirror or hor-mirror)
// hor_mirror(s) => "mnop\nijkl\nefgh\nabcd"

function vertMirror(strng) {
  let res = [];
  let arrayOfStrs = strng.split('\n');
  
  arrayOfStrs.forEach((item) => {
    res.push(item.split('').reverse().join(''))
  });
  
  
  return res.join('\n');
}

function horMirror(strng) {
  let arrayOfStrs = strng.split('\n');
  return arrayOfStrs.reverse().join('\n');
}

function oper(fct, s) {
  return fct(s)
}
