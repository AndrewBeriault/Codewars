//Your task in order to complete this Kata is to write a function which formats a duration, given as a number of seconds, in a human-friendly way.
//
//The function must accept a non-negative integer. If it is zero, it just returns "now". Otherwise, the duration is expressed as a combination of years, days, hours, minutes and seconds.
//
//It is much easier to understand with an example:
//
//* For seconds = 62, your function should return 
//    "1 minute and 2 seconds"
//* For seconds = 3662, your function should return
//    "1 hour, 1 minute and 2 seconds"

function formatDuration (seconds) {
    
    let years = 0,days = 0,hours = 0,minutes = 0
    //60,3600,86 400,31 536 000
    
    if(seconds === 0){
      return 'now'
    }
    
    if(seconds >= 31536000){
      while (seconds >= 31536000){
        years++
        seconds -= 31536000
      }
    }
    if(seconds >= 86400){
      while (seconds >= 86400){
        days++
        seconds -= 86400
      }
    }
    if(seconds >= 3600){
      while (seconds >= 3600){
        hours++
        seconds -= 3600
      }
    }
    if(seconds >= 60){
      while (seconds >= 60){
        minutes++
        seconds -= 60
      }
    }
    
    let arr = [years,days,hours,minutes,seconds]  
    let arr2 = arr
    let txt = ['year','day','hour','minute','second']
    let result = ''
    arr2 = arr2.filter(e => e != 0)
    
  for(let i = 0; i < arr.length; i++){
    switch(arr[i]){
        case 1: result += arr[i] + ' ' + txt[i]
        break;
        case 0:
        break;
        default: result += arr[i] + ' ' + txt[i] +'s'
        break;
        }
      if(arr[i] !== 0){
        if(arr2.length > 2){
          result += ', '
          arr2.splice(0,1)
        }
        else if(arr2.length > 1){
          result += ' and '
          arr2.splice(0,1)
        }
      }
    }
        
  console.log(result)
  return result
  }

//This codewar was done on July 12, 2022.
// my first successful Kyu4! 