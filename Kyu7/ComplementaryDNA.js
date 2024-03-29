//Deoxyribonucleic acid (DNA) is a chemical found in the nucleus of cells and carries the "instructions" for the development and functioning of living organisms.
//
//If you want to know more: http://en.wikipedia.org/wiki/DNA
//
//In DNA strings, symbols "A" and "T" are complements of each other, as "C" and "G". Your function receives one side of the DNA (string, except for Haskell); you need to return the other complementary side. DNA strand is never empty or there is no DNA at all (again, except for Haskell).
//
//More similar exercise are found here: http://rosalind.info/problems/list-view/ (source)
//
//Example: (input --> output)
//
//"ATTGC" --> "TAACG"
//"GTAT" --> "CATA"

function DNAStrand(dna){
  dna = dna.split('')
  for(let i = 0; i < dna.length;i++){
    if(dna[i] === 'A'){
      dna[i] = 'T'
    }
    else if(dna[i] === 'T'){
      dna[i] = 'A'
    }
    else if(dna[i] === 'G'){
      dna[i] = 'C'
    }
    else if(dna[i] === 'C'){
      dna[i] = 'G'
    }
  }
  return dna.join('')
}

//codewars for Aug 15, 2022

//function DNAStrand(dna) {
//  return dna.replace(/./g, function(c) {
//    return DNAStrand.pairs[c]
//  })
//}
//
//DNAStrand.pairs = {
//  A: 'T',
//  T: 'A',
//  C: 'G',
//  G: 'C',
//}

//note: I should do this one again. to get more comfortable using replace and objects as references instead of relying on if else