//The goal of this exercise is to convert a string to a new string where each character in the new string is "(" if that character appears only once in the original string, or ")" if that character appears more than once in the original string. Ignore capitalization when determining if a character is a duplicate.
//
//Examples
//"din"      =>  "((("
//"recede"   =>  "()()()"
//"Success"  =>  ")())())"
//"(( @"     =>  "))((" 
//Notes
//Assertion messages may be unclear about what they display in some languages. If you read "...It Should encode XXX", the "XXX" is the expected result, not the input!

function duplicateEncode(word){
  let result = []
  let i, j, k;
  word = word.toLowerCase().split('')
  for(i = 0; i < word.length; i++){
    k = 0
    for(j = 0; j < word.length; j++){
      if(word[i] === word[j]){
        k++
      }
    }
    if(k > 1){
      result.push(`)`)
    }
    else{
      result.push(`(`)
    }      
  }
return result.join('')
}

//Codewars 6kyu for July 24, 2022

//Note:
//function duplicateEncode(word){
//  return word
//    .toLowerCase()
//    .split('')
//    .map( function (a, i, w) {
//      return w.indexOf(a) == w.lastIndexOf(a) ? '(' : ')'
//    })
//    .join('');
//}