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
