// A JavaScript string stores a series of characters

// A string can be any text inside of double or single quotes

// It is possible to access an entire string, or an individual character within it

// To that end, the characters in a string are "indexed", and the indexes start at 0

// For a demonstration of this concept

var testString = 'words';

var firstCharacter = testString[0]; // accesses the first character: 'w'
var thirdCharacter = testString[2]; // accesses the third character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'

// A string does not need to have anything in it to still be considered a string

var emptyString = "";
console.log(emptyString);

// Return Values for Functions, and multiple parameters

// first we will declare a function that takes a string parameter and returns it
function returnString(string) {
    return string;
  }
  var resultString = returnString('hooray for programming');
  console.log('resultString:', resultString); // we have added console.log messages to help us identify which variable is which when this code is run in the console

  // next, we will declare a function that takes a string parameter and returns the first letter
function returnFirstCharacter(string) {
    return string[0];
  }
  var firstCharacter = returnFirstCharacter('coffee');
  console.log('firstCharacter:',firstCharacter);

  // lastly, we will declare a function that takes a string and a number parameter and returns the character located at the given index within the string
function returnACharacter(string, index) {
    return string[index];
  }
  var character = returnACharacter('tea leaves', 6);
  console.log('character:', character);

  // A variable is a named location for storing a value

  // It is important to consider that this value we are storing will have a "type"

  // The name we choose can help, or it can hurt, our understanding of the program

  // Let us consider a few examples for each of the previously mentioned data types:

// Numbers
var count = 9;
var whatever = 6398;

// Strings
var name = "Charlemagne";
var something = "Head Chef";

// Booleans
var hasBeenDelivered = true;
var blah = false;

// Function parameters are the names listed in the function definition.

// Function arguments are the real values passed to (and received by) the function.



// string interpolation example
var food = "pizza";
var methodOfTransport = "the train";

var sentence = "The best way to travel to get " + food + " is surely to take " + methodOfTransport;
console.log("Resulting sentence:", sentence);

// We are going to complete a function that takes in two parameters, both will be strings (activity, dayOfTheWeek), and returns a message based on the inputs. Your function should create a new variable, assign it to an expression which will interpolate the parameters into a message (described below), then return that variable. Below are examples of the code running, assuming that you will have completed the described function: interpolateAString.

// var resultMessage1 = interpolateAString('hiking', 'Tuesday');
// console.log("should log 'We will go hiking on Tuesday.':", resultMessage1);

// var resultMessage2 = interpolateAString('dancing', 'Friday');
// console.log("should log 'We will go dancing on Friday.':", resultMessage2);

function interpolateAString(activity, dayOfTheWeek) {
  // create a result variable
  // assign it to an expression which interpolates the input parameters into the described message
  var result = 'We will go ' + activity + 'on this ' + dayOfTheWeek;
  // return the result variable
  return result;
}

// We are going to complete a function that takes in one parameter, a string, and returns the input string's last character. Your function should determine the length of the input string minus 1, and assign it to a lastIndex variable. Your function should also create a lastCharacter variable and assign it to an expression which uses lastIndex to access the last character in the string, and return the lastCharacter variable. Below are examples of the code running, assuming that you will have completed the described function: getLastCharacter.

// var resultLastCharacter1 = getLastCharacter('Banana');
// console.log('should log "a":', resultLastCharacter1);

// var resultLastCharacter2 = getLastCharacter('Macrofirm');
// console.log('should log "m":', resultLastCharacter2);

// function getStringLength(string) {
//   // create a length variable
//   // assign it to the length of the string
//   var length = string.length;
//   // return the length variable
//   return length;
// }

// We are going to complete a function that takes in two parameters, both will be strings, and returns the two strings concatenated. Your function should create a new variable, assign it to an expression which will add together or concatenate the input strings, then return that variable. 

function addTogetherTwoStrings(string1, string2) {
  // create a result variable
  // assign it to an expression which adds together string1 and string2
  var result = string1 + string2;
  // return the result variable
  return result;
  
}
// assigning a expression adding first and last names with a space in between
function createFullName(firstName, lastName){
  var fullName = firstName + " " + lastName;
  return fullName;
}

// Let us consider the case in which we want to build a message around the values of a variable
// This is called string interpolation
// We can do this using the + operator (note -> there are newer ways to do this - research template literals):

var food = "pizza";
var methodOfTransport = "the train";

var sentence = "The best way to travel to get " + food + " is surely to take " + methodOfTransport;
console.log("Resulting sentence:", sentence);


function interpolateAString(activity, dayOfTheWeek) {
  // create a result variable
  // assign it to an expression which interpolates the input parameters into the described messag
  var result = 'We will go '+ activity +' on ' + dayOfTheWeek + '.';
  // return the result variable
  return result;
}

// Let us consider the case of wanting to get the length of a string
// We can do so using the .length property (not a method, although vaguely similar in appearance):


// var name = "Alan Turing";
// var lengthOfName = name.length;
// console.log('lengthOfName version 2:', lengthOfName);

// We are going to complete a function that takes in one parameter, a string, and returns the length of that string. Your function should create a variable and assign it to the length of the input string using the .length property, and return that variable.

// function getStringLength(string){
//   // create a length variable
//   // assign it to the length of the string
//   var length = string.length;
//   // return the length variable 
//   return length;
  
// }

// Let us consider the case of wanting to get the last character in a string
// Were we to attempt to use an actual number index, we will be unsuccessful for the general case
// We can do so using the .length property and the fact that a string's index start at 0:

var lastCharacter = "JavaScript"["JavaScript".length -1]
console.log('last character', lastCharacter);

// We are going to complete a function that takes in one parameter, a string, and returns the input string's last character. Your function should determine the length of the input string minus 1, and assign it to a lastIndex variable. Your function should also create a lastCharacter variable and assign it to an expression which uses lastIndex to access the last character in the string, and return the lastCharacter variable. 

// var resultLastCharacter1 = getLastCharacter('Rich Rollin');
// console.log('should log n: ', resultLastCharacter1);

var subString = "JavaScript".substring(3, 8);
console.log('portion of the word up to three but not past 8: ', subString);