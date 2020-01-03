function christmasTree(height) {
  let tree = [];
  let counter = 1;
  
  for (let i = 0; i < height; i++) {
    let temp = '';
    temp += '*'.repeat(counter);
    temp = temp.padStart(height + temp.length - i - 1);
    temp = temp.padEnd(height + temp.length - i - 1);
    counter += 2;
    tree.push(temp);
  }
  
  return tree.join('\n')
}

console.log(christmasTree(5));
