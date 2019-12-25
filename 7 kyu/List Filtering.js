// In this kata you will create a function that takes a list of non-negative integers and strings and returns a new list with the strings filtered out.

function filter_list(l) {
  const result = [];
  
  l.forEach((item) => {
    if (typeof item !== 'string') {
      result.push(item)
    }
  });
  
  return result;
}

filter_list([1,2,'1','b']);
