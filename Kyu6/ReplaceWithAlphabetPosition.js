//In this kata you are required to, given a string, replace every letter with its position in the alphabet.

//If anything in the text isn't a letter, ignore it and don't return it.

//"a" = 1, "b" = 2, etc.

function alphabetPosition(text) {
  
  //define alphabet
  const alphabet = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"]  
  //make string lowercase, then remove any non alphabet characters, then split the string into an array[].
  text = text.toLowerCase().replace(/[^a-z]/gi, '').split("")
  
  //go through the index of characters.  
  for(let i = 0; i < text.length;i++)
  {
  //go through the index of alphabet letters.
    for(let j = 0; j < alphabet.length;j++)
    {
  //check if the index matches the alphabet character;
      if(text[i] === alphabet[j])
      {
  //if so, changed the element to the index of the corresponding alphabet index number.
       text[i] = j + 1
      }
    }      
  }
  //join the array back into a string
    text = text.join(" ")
  //return the value
    return text
}

//notes: what a terrible time to forget about .match()

//Codewars for May 18, 2022