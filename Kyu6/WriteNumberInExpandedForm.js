//You will be given a number and you will need to return it as a string in Expanded Form. For example:
//
//expandedForm(12); // Should return '10 + 2'
//expandedForm(42); // Should return '40 + 2'
//expandedForm(70304); // Should return '70000 + 300 + 4'
//NOTE: All numbers will be whole numbers greater than 0.

function expandedForm(num) {
  
  num = num.toString().split('')  
  
  for(let i = 0; i < num.length ;i++){
    for(let j = i; j < num.length -1;j++){
      num[i] = num[i] + "0"
    }      
  }
  //turn numbers into array of strings,
  //then concatenate the necessary number of 0s to each element depending on its index position in the array. 

   
  //check if any elements in the array equal 0 as an integer,
  //then re-check the array to see if zero values remain. call function again if they do.
  function RemoveZeros(){
      num.forEach((el,i) => { if(parseInt(el) === 0){num.splice(i,1)}  })
      num.forEach((el,i) => { if(parseInt(el) === 0){RemoveZeros()}  })
  }
  
  RemoveZeros()

  num = num.join(" + ")
  //bring it on home to papa.
  return num
}

//Codewars 6kyu for May 30, 2022