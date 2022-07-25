//Connect Four is a game in which two players take turns dropping red or yellow colored discs into a vertically suspended 7 x 6 grid. Discs fall to the bottom of the grid, occupying the next available space.
//
//A player wins by connecting four of their discs horizontally, vertically or diagonally.
//
//Given a multidimensional array representing a Connect Four board, your task is to create a function which can determine who won the game.
//
//Your connectFour function will be passed an array matrix similar to this:
//
//[['-','-','-','-','-','-','-'],
// ['-','-','-','-','-','-','-'],
// ['-','-','-','R','R','R','R'],
// ['-','-','-','Y','Y','R','Y'],
// ['-','-','-','Y','R','Y','Y'],
// ['-','-','Y','Y','R','R','R']];
//'R' represents a red disc
//
//'Y' represents a yellow disc
//
//'-' represents an unoccupied space
//
//In this example the red player won by making a horizontal line of 4 red discs.
//
//If the red player won, your connectFour function should return 'R'. If the yellow player won, it should return 'Y'. If the board is full and no one won it should return 'draw'. If the game is still in progress it should return 'in progress'.



function connectFour(board) {
  let red = 0,yel = 0;
  let inProg = false;  
  for(let i = 0;i < 6;i++){
      red = 0, yel = 0
      for(let j = 0;j < 7;j++){
        if(board[i][j] === "R"){
          red++
          yel = 0
        }
        else if(board[i][j] === "Y"){
          yel++
          red = 0
        }
        else{
          inProg = true; //if the loop finds an empty space then the game must still be in progress.
          red = 0,yel = 0
        }
        // check win
        if (red >= 4){
          return 'R'
        }
        else if (yel >= 4){
          return 'Y'
        }
      }
    }
    
  for(let i = 0;i < 7;i++){
      red = 0, yel = 0
      for(let j = 0;j < 6;j++){
        if(board[j][i] === "R"){
          red++
          yel = 0
        }
        else if(board[j][i] === "Y"){
          yel++
          red = 0
        }
        else{
          red = 0,yel = 0
        }
        // check win
        if (red >= 4){
          return 'R'
        }
        else if (yel >= 4){
          return 'Y'
        }
      }
    }
  
  // test diagonal starting from the bottom left.
    for(let k = 0;k < 4;k++){
      let j = k
      red = 0, yel = 0
      for(let i = 5;i > -1;i--){
        if(board[i][j] === "R"){
          red++
          yel = 0
        }
        else if(board[i][j] === "Y"){
          yel++
          red = 0
        }
        else{
          red = 0,yel = 0
        }
        j++
        // check win
        if (red >= 4){    
          return 'R'
        }
        else if (yel >= 4){
          return 'Y'
        }
      }
    }
    
  // test diagonal going right. Starting from bottom right.
    for(let k = 6;k > -1;k--){
      let j = k
      red = 0, yel = 0
      for(let i = 5;i > -1;i--){
        if(board[i][j] === "R"){
          red++
          yel = 0
        }
        else if(board[i][j] === "Y"){
          yel++
          red = 0
        }
        else{
          red = 0,yel = 0
        }
        j--
        // check win
        if (red >= 4){    
          return 'R'
        }
        else if (yel >= 4){
          return 'Y'
        }
      }
    }
    
    
  //test slivers that the previous function misses.
  const slivers = [
                  //left side
                  [board[3][0],board[2][1],board[1][2],board[1][2]],
                  [board[4][0],board[3][1],board[2][2],board[1][3]],
                  [board[3][1],board[2][2],board[1][3],board[0][2]],
                  //right side
                  [board[3][6],board[2][5],board[1][4],board[0][3]],
                  [board[4][6],board[3][5],board[2][4],board[1][3]],
                  [board[3][5],board[2][4],board[1][3],board[0][2]],
                  ]
  
    for(let i = 0; i < slivers.length; i++){
      console.log(slivers[i])
        if(slivers[i].every(e => e === 'R') || slivers[i].every(e => e === 'Y')){
          return slivers[i][0]
        }
      }
    
  
    //return if game has concluded and if in a draw.
  if(!inProg){
    return 'draw'
  }
  else{
    return 'in progress'
  }
    
  }

  //Kyu 4 Codewars for July 24, 2022