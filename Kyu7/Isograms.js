//An isogram is a word that has no repeating letters, consecutive or non-consecutive. Implement a function that determines whether a string that contains only letters is an isogram. Assume the empty string is an isogram. Ignore letter case.
//
//Example: (Input --> Output)
//
//"Dermatoglyphics" --> true
//"aba" --> false
//"moOse" --> false (ignore letter case)

function isIsogram(str){
  console.log(str)
  str = str.toLowerCase().split('')
  for(let i = 0;i < str.length; i++){
   for(let j = i + 1;j < str.length; j++){
      if(str[i] === str[j]){
        return false
      }
    }
  }
  return true
}

//note - Set.size returns a set based on unique characters, which would better suit this problem. see below.
//function isIsogram(str){
// return new Set(str.toUpperCase()).size == str.length;
//}


//Kyu 7 Codewars for July 19