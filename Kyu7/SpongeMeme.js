//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were numbers.

//Return your answer as a number.

function spongeMeme(sentence) {
  let result = sentence.split('')
  let capital = true
  for(let i = 0; i < result.length; i++){
      if(capital){
        result[i] = result[i].toUpperCase()
        capital = false
      }
      else{
        result[i] = result[i].toLowerCase()
        capital = true
      }
    }
  result = result.join('')
  return result
}

//note - function spongeMeme(sentence) {
//return sentence.split('').map((v,i) => i % 2 ? v.toLowerCase(): v.toUpperCase()).join('');
//} 


//codewars for July 4, 2022