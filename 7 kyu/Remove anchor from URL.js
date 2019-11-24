function removeUrlAnchor(url){
  if (url.indexOf('#') !== -1) {
    return url.slice(0, url.indexOf('#'))
  }
  
  return url
}

console.log(removeUrlAnchor('www.codewars.com'));
