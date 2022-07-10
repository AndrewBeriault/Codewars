//task is to find the nearest square number, nearest_sq(n), of a positive integer n.

function nearestSq(n){
  let diff = 0
  let i = 0
   while(diff >= 0){   
      i++
      diff = n - i*i
    }
  return -diff < (n - (i-1)*(i-1)) ? i*i : (i-1)*(i-1)
}

 //8 Kyu Codewar for July 9th, 2022

 // note: const nearestSq = n => Math.pow(Math.round(Math.sqrt(n)), 2); --much easier to sqrt, round and pow.