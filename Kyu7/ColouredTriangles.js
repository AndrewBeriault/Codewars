//Given an array of integers as strings and numbers, 
//return the sum of the array values as if all were numbers.

//Return your answer as a number.

function triangle(row) {

  row = row.split('')
  console.log(row,row.length)
  if(row.length === 1){
    return row.toString()
  }
  else{
  let newRow = []
  
  function ParseRow(){
    newRow = []
  for(let i = 0; i < row.length -1; i++){
    if(row[i] === row[i+1]){
      newRow.push(row[i])
    }
    else if(row[i] === 'R'){
        switch(row[i+1]){
          case 'G':
          newRow.push('B')
          break;
          case 'B':
          newRow.push('G')
          break;
        }
      }
      else if(row[i] === 'G'){
        switch(row[i+1]){
          case 'B':
          newRow.push('R')
          break;
          case 'R':
          newRow.push('B')
          break;
        }
      }
      else if(row[i] === 'B'){
        switch(row[i+1]){
          case 'G':
          newRow.push('R')
          break;
          case 'R':
          newRow.push('G')
          break;
        }
      }
    }
    row = newRow
    if(newRow.length > 1){
      ParseRow()
    }
  }
  ParseRow();
  return newRow.toString()
  }
}


//Codewars for July 13 2022