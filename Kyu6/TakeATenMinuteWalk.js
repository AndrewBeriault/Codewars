//You live in the city of Cartesia where all roads are laid out in a perfect grid. You arrived ten minutes too early to an appointment, so you decided to take the opportunity to go for a short walk. The city provides its citizens with a Walk Generating App on their phones -- everytime you press the button it sends you an array of one-letter strings representing directions to walk (eg. ['n', 's', 'w', 'e']). You always walk only a single block for each letter (direction) and you know it takes you one minute to traverse one city block, so create a function that will return true if the walk the app gives you will take you exactly ten minutes (you don't want to be early or late!) and will, of course, return you to your starting point. Return false otherwise.
//
//Note: you will always receive a valid array containing a random assortment of direction letters ('n', 's', 'e', or 'w' only). It will never give you an empty array (that's not a walk, that's standing still!).

function isValidWalk(walk) {

  let nsew = [0,0] 
  
  walk.forEach(function(e){
   switch(e){
       case('n'):
       nsew[0]++
       break;
       case('e'):
       nsew[1]++
       break;
       case('s'):
       nsew[0]--
       break;
       case('w'):
       nsew[1]--
       break;
   } 
  })
  return (nsew[0] === 0 && nsew[1] === 0 && walk.length === 10) ? true : false
}

//Codewars 6kyu for July 15, 2022