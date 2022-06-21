//Digital root is the recursive sum of all the digits in a number.
//
//Given n, take the sum of the digits of n. If that value has more than one digit, continue reducing in this way until a single-digit number is produced. The input will be a non-negative integer.
//
//Examples
//    16  -->  1 + 6 = 7
//   942  -->  9 + 4 + 2 = 15  -->  1 + 5 = 6
//132189  -->  1 + 3 + 2 + 1 + 8 + 9 = 24  -->  2 + 4 = 6
//493193  -->  4 + 9 + 3 + 1 + 9 + 3 = 29  -->  2 + 9 = 11  -->  1 + 1 = 2

function digital_root(n) {
  let result = 0
  n = Array.from(n.toString()).map(Number).forEach(e => result = result + e )
  
  function reduce(){
    if(result > 9) {
      let newResult = 0
      result = Array.from(result.toString()).map(Number).forEach(e => newResult = newResult + e )     
      result = newResult
      reduce()
    }
  }
  
  reduce()
  return result 
}

//Codewars 6kyu for June 21, 2022