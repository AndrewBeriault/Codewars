// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

function findShort(s){
  s = s.split(' ')
  let shortword = s[0]
  for(let i = 1; i < s.length; i ++){
    if(s[i].length < shortword.length){
      shortword = s[i]
    }
  }
 return shortword.length
}

//Codewar Kyu 7 for May 25, 2022

//better solution  return Math.min.apply(null, s.split(' ').map(w => w.length));