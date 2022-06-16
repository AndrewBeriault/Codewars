//Implement the function unique_in_order which takes as argument a sequence and returns a list of items without any elements with the same value next to each other and preserving the original order of elements.
//
//For example:
//
//uniqueInOrder('AAAABBBCCDAABBB') == ['A', 'B', 'C', 'D', 'A', 'B']
//uniqueInOrder('ABBCcAD')         == ['A', 'B', 'C', 'c', 'A', 'D']
//uniqueInOrder([1,2,2,3,3])       == [1,2,3]

var uniqueInOrder=function(iterable){
  
  if(typeof iterable != "object"){
  iterable = iterable.split('')
    }

 function removeDuplicate(){
    for(let i = 0;i < iterable.length;i++){
      if(iterable[i] === iterable[i+1]){
        iterable.splice(i + 1,1)
      }
    }
  }
    
 function checkDuplicate(){
    for(let i = 0;i < iterable.length;i++){
    if(iterable[i] !== iterable[i+1]){
      removeDuplicate()
     }      
   }
 }
  
  checkDuplicate()
  return iterable
}

//Codewars 6kyu for June 15, 2022