//The rgb function is incomplete. Complete it so that passing in RGB decimal values will result in a hexadecimal representation being returned. Valid decimal values for RGB are 0 - 255. Any values that fall out of that range must be rounded to the closest valid value.

//Note: Your answer should always be 6 characters long, the shorthand with 3 will not work here.

function rgb(r, g, b){
  
  //Googles how hex color works...
  
  function toHex(thx){
    thx > 255 ? thx = 255 : thx
    thx < 0 ? thx = 0 : thx
    thx = thx.toString(16)
    return thx.length > 1 ? thx : thx = '0'+ thx
  }
  
 return (toHex(r) + toHex(g) + toHex(b)).toUpperCase()
}

//notes: I had to look up how hexadecimal color worked as I had never known up to this point.
//....so I got that going for me, which is nice.
//This codewar was done on May 12, 2022. I think its my first completed 5 Kyu.