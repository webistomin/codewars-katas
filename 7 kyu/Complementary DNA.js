function DNAStrand (dna) {
  const complementary = {
    'A': 'T',
    'T': 'A',
    'G': 'C',
    'C': 'G'
  };
  
  let result = '';
  
  dna.split('').forEach((item) => {
    result += complementary[item];
  });
  
  return result
}
