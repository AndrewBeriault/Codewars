
//Complete the function that accepts a string parameter, and reverses each word in the string. All spaces in the string should be retained.

//Examples
//"This is an example!" ==> "sihT si na !elpmaxe"
//"double  spaces"      ==> "elbuod  secaps"


function reverseWords(str) {
  
  let strArr = str.split(' ')
  
  for (let i = 0; i < strArr.length; i++){
  strArr[i] = strArr[i].split('').reverse().join('')
 }
   return strArr.join(' ')  
 }
 
 //codewar for May 16, 2022
 //unrealated to this codewars, but I failed earlier today to complete the Hofstadter mutual recursion Kata. should look ino retrying that one later.