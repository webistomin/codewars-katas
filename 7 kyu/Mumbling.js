// This time no story, no theory. The examples below show you how to write function accum:
//
//   Examples:
//
// accum("abcd") -> "A-Bb-Ccc-Dddd"
// accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
// accum("cwAt") -> "C-Ww-Aaa-Tttt"
// The parameter of accum is a string which includes only letters from a..z and A..Z.

function accum(s) {
  let arrOfChars = Array.from(s);
  let lowered = arrOfChars.map((item) => item.toLocaleLowerCase());
  let result = '';
  
  lowered.forEach((char, index) => {
    if (index === 0) {
      result += `${char.toUpperCase()}-`
    } else if (index === lowered.length - 1) {
      result += `${char.toUpperCase()}${char.repeat(index)}`;
    } else {
      result += `${char.toUpperCase()}${char.repeat(index)}-`;
    }
  });
  
  return result;
}

console.log(accum('ZpglnRxqenU')); // "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu"

