//Write an algorithm that takes an array and moves all of the zeros to the end, preserving the order of the other elements.

//moveZeros([false,1,0,1,2,0,1,3,"a"]) // returns[false,1,1,2,1,3,"a",0,0]

function moveZeros(arr) {
  let zeroArr = []
  zeroArr = arr.filter(e => e === 0)
  arr = arr.filter(e => e !== 0)
  return arr.concat(zeroArr)
}

//This codewar was done on June 30, 2022.