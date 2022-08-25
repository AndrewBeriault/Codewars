//For long period JavaScript warriors trained a lot in coding kata. But to find way warrior also need physical kata. Some of warriors forgot about this fact and enemies can use this weakness, your clan is under threat. You are chosen to fix this situation. Write a function to calculate Body mass index for each warrior.
//
//bmi = weight / (height*height)
//
//where weight is in kg and height is in meters
//Warriors know only their height (in centimetres) and weight (in kilogrames). Your task is to return an object with fields
//
//value - calculated Body mass index, as a string, rounded to the first decimal.
//
//category - related category, as a string (from https://en.wikipedia.org/wiki/Body_mass_index ; see below). Note: determine the category before rounding the BMI.
//
//Ex :
//
//calculateBmi(65,175)
//returns: {value: "21.2", category: "Normal (healthy weight)"}
//A constant DATA is preloaded for you. It contains the names of all the categories and their boundaries:
//
//from (kg) is inclusive.
//to (kg) is exclusive.
//const DATA = [
////  from,  to,       category
//    [0,    15,       "Very severely underweight"],
//    [15,   16,       "Severely underweight"],
//    [16,   18.5,     "Underweight"],
//    [18.5, 25,       "Normal (healthy weight)"],
//    [25,   30,       "Overweight"],
//    [30,   35,       "Obese Class I (Moderately obese)"],
//    [35,   40,       "Obese Class II (Severely obese)"],
//    [40,   45,       "Obese Class III (Very severely obese)"],
//    [45,   50,       "Obese Class IV (Morbidly obese)"],
//    [50,   60,       "Obese Class V (Super obese)"],
//    [60,   Infinity, "Obese Class VI (Hyper obese)"],
//];
//Hurry up, save your clan!

function calculateBmi(weight, height) {
  
  const DATA = [
//  from,  to,       category
    [0,    15,       "Very severely underweight"],
    [15,   16,       "Severely underweight"],
    [16,   18.5,     "Underweight"],
    [18.5, 25,       "Normal (healthy weight)"],
    [25,   30,       "Overweight"],
    [30,   35,       "Obese Class I (Moderately obese)"],
    [35,   40,       "Obese Class II (Severely obese)"],
    [40,   45,       "Obese Class III (Very severely obese)"],
    [45,   50,       "Obese Class IV (Morbidly obese)"],
    [50,   60,       "Obese Class V (Super obese)"],
    [60,   Infinity, "Obese Class VI (Hyper obese)"],
];
  
  let bmiObject = {
    value: '',
    category: ''
  }
  
  bmiObject.value = (weight / Math.pow(height/100,2)).toFixed(1)
  let i = 0
  bmiObject.category = DATA[i][2]
  while(DATA[i][1] < bmiObject.value){
    bmiObject.category = DATA[i + 1][2]
    i++
  }
  bmiObject.value.toString('')
  
  return bmiObject
}

//Codewars 6kyu for Aug 26, 2022

//Note: since it was preloaded. I could have called on DATA as an object without delcaring it.
//Note: it was not necessary to declare an object to be returned, I could have returned the two values as an object without declaring one.