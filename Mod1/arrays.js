// The Array "object" is used to store an ordered list of multiple values in a single variable

// Array indexes, like string indexes, are zero-based: the first element in an array is located at index 0, the second at index 1, and so on

// Arrays are considered "objects" in JavaScript,

var fruits = ['oranges', 'bananas', 'apples'];
var scores = [98, 85, 91, 78, 82];

var firstFruit = fruits[0];
var thirdScore = scores[2];

console.log('firstFruit:', firstFruit);
console.log('thirdScore:', thirdScore);

// next, we will declare a function that takes in an array and an index, and returns the element located at the inputted index
function returnAnElement(array, index) {
    return array[index];
  }
  
  var scores = [98, 85, 91, 78, 82];
  var position = 3;
  var positionElement = returnAnElement(scores, position);
  console.log('positionElement:', positionElement);
  
// we will declare a finction that takes no parameter, creates a array, and the newly created array

function createAndReturnAnArray(){
    var newArray = ['some, elements, 4, 5'];
    return newArray;
}

var resultArray = createAndReturnAnArray();
console.log('resultArray:', resultArray);