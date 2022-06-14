//Complete the function that takes a non-negative integer n as input, and returns a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

function powersOfTwo(n){
  let arr = []
  for(let i = 0; i < n + 1; i ++){
   arr[i] = (2 ** i)
  }
  return arr
}

 //8 Kyu Codewar for June 13, 2022
