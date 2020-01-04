const nums = () => {
  let result = [];
  const nums = '0123456789';
  let numsAvailable = 1;
  
  for (let i = 1; i <= 20; i+=2) {
    let temp = '';
    
    
    while (temp.length < numsAvailable) {
      temp += nums.slice(0, numsAvailable)
    }
  
    while (temp.length < i) {
      temp += nums.slice(0, numsAvailable).slice(0, numsAvailable - 1).split('').reverse().join('');
    }
    
    result.push(temp);
    numsAvailable++;
  }
  
  const reversed = Array.from(result);
  reversed.splice(reversed.length - 1, 1);
  result.push(...reversed.reverse());
  
  return result.join('\n')
};

console.log(nums());
