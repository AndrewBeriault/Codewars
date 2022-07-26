//Find the sum of the digits of all the numbers from 1 to N (both ends included).
//
//Examples
//# N = 4
//1 + 2 + 3 + 4 = 10
//
//# N = 10
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) = 46
//
//# N = 12
//1 + 2 + 3 + 4 + 5 + 6 + 7 + 8 + 9 + (1 + 0) + (1 + 1) + (1 + 2) = 51

function twistedSum(n) {
  let result = 0;
  for(let i = 0; i <= n; i++){
    n.length < 2 ? result += i : result += Array.from(i.toString()).map(Number).reduce((p,c)=>p+c,0)
  }
  return result;
}

//Codewars 6kyu for June 26, 2022