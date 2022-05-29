//Given an array of integers your solution should find the smallest integer.

class SmallestIntegerFinder {
  findSmallestInt(args) {
    let smallest = args[0]
    for(let i = 0;i < args.length; i++){
      if(smallest > args[i]){
        smallest = args[i]
      }
    }
    return smallest
  }
}

 //8 Kyu Codewar for May 29, 2022
 //note: return Math.min(...args)...obviously.