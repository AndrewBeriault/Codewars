//Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
//
//Examples
//"()"              =>  true
//")(()))"          =>  false
//"("               =>  false
//"(())((()())())"  =>  true

function validParentheses(parens) {
  
  //this solution goes through the parens as an array and tracks the number of parens in the pair variable.
  
    let pair = 0;
  let result = true; //the value that will be returned once all tests are performed.
  let invalid = false; //becomes true if the count for pair ever goes below 0. this would mean the parens are out of order.
  
  if (parens === ''){  //if there is no value, return true....for some reason.
    return true
  }
  
  parens = parens.split('')

  parens.forEach(function(e){ //track the pair value and determine if the order is at any point invalid using the invalid bool.
    e === `(` ? pair++ : pair--
    if(pair < 0){
      invalid = true;
    }
  })
  
  pair === 0 ? result = true : result = false

  //if(parens[0] != `(` || parens[parens.length - 1] != `)`) {
   // result = false
   // }
  
  return invalid? false : result
  
}

//This codewar was done on June 28, 2022.