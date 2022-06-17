//Move the first letter of each word to the end of it, then add "ay" to the end of the word. Leave punctuation marks untouched.
//
//Examples
//pigIt('Pig latin is cool'); // igPay atinlay siay oolcay
//pigIt('Hello world !');     // elloHay orldway !

function pigIt(str){  
  
  let substr = str.split(' ')
  let result = []  
  substr.forEach(e => pigify(e))
  
    function pigify(str)
    {
      if((str !== "!") && (str !== "?")){
      let first = str.substring(0,1)
      let second = str.substring(1)
      let pig = second + first + "ay"
      result.push(pig)
      }
      else{
        result.push(str)
      }
    }
  
  return result.join(' ')
  
}

//This codewar was done on June 17, 2022.
// better solution is 

//function pigIt(str){
//  return str.replace(/(\w)(\w*)(\s|$)/g, "\$2\$1ay\$3")
//}