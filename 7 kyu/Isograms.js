function isIsogram(str) {
  return str.toLowerCase().length === Array.from(new Set(str.toLowerCase().split(''))).length
}
