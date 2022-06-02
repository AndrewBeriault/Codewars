//You are given an odd-length array of integers, in which all of them are the same, except for one single number.

//Complete the method which accepts such an array, and returns that single different number.

//The input array will always be valid! (odd-length >= 3)

//Examples
//[1, 1, 2] ==> 2
//[17, 17, 3, 17, 17, 17, 17] ==> 3

function stray(numbers) {
  console.log(numbers)
  //if the first 2 numbers match, filter for all numbers not like them.
  if(numbers[0] === numbers[1]){ 
    numbers = numbers.filter((e, i) => numbers[i] !== numbers[0])
    
  }
  //else if index 1 and 2 are the same, filter for numbers that arent like index 1.
  else if(numbers[1] === numbers[2]){
    numbers = numbers.filter((e, i) => numbers[i] !== numbers[1])
  }
  //else.
  else{
    numbers = numbers.filter((e, i) => numbers[i] === numbers[0])
  }
  return Number(numbers)
}

//note - more efficient to use map in future.