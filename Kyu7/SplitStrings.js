//Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
//
//Examples:
//
//* 'abc' =>  ['ab', 'c_']
//* 'abcdef' => ['ab', 'cd', 'ef']

function solution(str){
  let arr = []
  for(let i = 0; i < str.length; i++){
     if(i === str.length - 1 && str % 2 != 0){
       arr.push(str.substring(i, i+2) + '_')
     }
     else{
       arr.push(str.substring(i, i+2))
     }
     i++
  }
  return arr
}

//Codewars 6kyu for Sep 1, 2022
//Note: a more esoteric, but simpler solution using match function solution(s){
//   return (s+"_").match(/.{2}/g)||[]
// } 
//spend some time going over js.match in future. 