//ROT13 is a simple letter substitution cipher that replaces a letter with the letter 13 letters after it in the alphabet. ROT13 is an example of the Caesar cipher.

//Create a function that takes a string and returns the string ciphered with Rot13. If there are numbers or special characters included in the string, they should be returned as they are. Only letters from the latin/english alphabet should be shifted, like in the original Rot13 "implementation".

function rot13(message){
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]
  const upper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"]    
  message = message.split('') //message becomes array  
  message = message.map(e => //check each element in array                        
    (alphabet.includes(e) || upper.includes(e)) ? //is the element a letter?    
    ((e == e.toUpperCase()) ? //is the element uppercase?
    upper[(upper.findIndex(f => f === e) + 13) % 26] : //alter uppercase element accordingly 
     alphabet[(alphabet.findIndex(f => f === e) + 13) % 26] ) : e ) //alter element accordingly
  return message.join('')
}

//This codewar was done on July 6, 2022.
//note: creating just one array that inclues both uppercase and lowercase would be more efficient.