//In this little assignment you are given a string of space separated numbers, and have to return the highest and lowest number.
//
//Examples
//highAndLow("1 2 3 4 5");  // return "5 1"
//highAndLow("1 2 -3 4 5"); // return "5 -3"
//highAndLow("1 9 3 4 -5"); // return "9 -5"
//Notes
//All numbers are valid Int32, no need to validate them.
//There will always be at least one number in the input string.
//Output string must be two numbers separated by a single space, and highest number is first.

function highAndLow(numbers){
  numbers = numbers.split(' ').map(e => Number(e))
  let curr = numbers[0]
  let high = numbers.reduce((a,b) => a > b ? a : b , curr)
  let low = numbers.reduce((a,b) => a < b ? a : b , curr)
  return `${high} ${low}`
}

//note - I REALLY took the long way around. where to begin.

// 1- forgot that Max and Min exist in JS (d'oh!).
// 2- reduce will take the starting value of the array if no value supplied, so curr is unneeded.

// a better solution is as follows:

//function highAndLow(numbers){
//  numbers = numbers.split(' ');
//  return `${Math.max(...numbers)} ${Math.min(...numbers)}`;
//}