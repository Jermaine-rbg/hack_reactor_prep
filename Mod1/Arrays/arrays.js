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

function accessAnElement(array, index) {
  // create a result variable,
  // assign it to an expression that accesses the element within array at the inde
  var result = array[index];
  // return the result variable
  return result;
}

function reassignAnElement(array, index, newValue) {
  // reassign the value in the array, located at the index, to the newValue parameter
  array[index] = newValue;
  // return the input array
  return array;
}

function getArrayLength(array) {
  // create a length variable
  // assign it to the length of the array
  var length = array.length;
  // return the length variable
  return length;
}

function getLastElement(array) {
  // create a lastIndex variable
  // assign it to the last index in the array
  var lastIndex = array.length -1;
  // create a lastElement variable
  var lastElement = array[lastIndex];
  // assign it to the last element in the string (make use of lastIndex)
  // return the lastElement variable
  return lastElement;
}

function applyPush(array, element) {
  // add the element to the back of the array
  array.push(element);
  // return the array
  return array;
}

function applyPop(array) {
  // create a popped variable
  var popped = array.pop();
  // assign it to an expression removing the last element from the array
  // return the popped variable
  return popped;
}

function applyUnshift(array, element) {
  // add the element to the front of the array
  array.unshift(element);
  // return the array
  return array;
}

function addAnElementInGeneral(array, index, element) {
  // add the element to the array at the index given
  // (be sure not to replace any existing elements)
  array.splice(index, 0, element);
  // return the array
  return array;
}

function removeAnElementInGeneral(array, index) {
  // remove the element from the array at the index given
  array.splice(index ,1);
  // return the array
  return array;
}

// declaring a empty array 
// var crips = [];

//var crips = [60, 'nhood', 'blocc'];
//console.log(crips);


// removing the last element of a array pop is last 
//var lastElement = crips.pop();
//console.log(lastElement);

// adding to the end of a array is using the push method
//crips.push = ('curve blocc');
//console.log(crips);

// removing the fisrt element of a array is the shift method
//crips.shift = ('nasty boy');
//console.log(crips);

// to add one or more elements to the beginning of a aary is the .unshift method
//crips.unshift = ('rollin six owe', 'dead end blocc');
//console.log(crips);


// the splice method is used when removing and inserting a element into a array by using the index number and element
//crips.splice = (1, 'blue ');
//console.log(crips);

// to remove elements from a array by index
//crips.splice = (1);
//console.log(crips);

function applySlice(array, start, end) {
  // create a sliceOfArray variable
  // assign it to a portion of the array from before start, up to, but not including en
  var sliceOfArray = array.slice(start, end);
  // return the sliceOfArray variable
  return sliceOfArray;
}

let crips = ['rollin six owe', 'nhood', 'dead end blocc'];
crips.shift = ('rollin six owe');
console.log(crips);

function applyConcat(array1, array2) {
  // create a concattedArray variable
  // assign it to the contents of both array1 and array2
  var concattedArray = array1.concat(array2);
  // return the concattedArray variable
  return concattedArray;
}

function applyJoin(arrayOfStrings, string) {
  // create a joinedString variable
  // assign it to a string which is all of the strings in the input array separated by the input string
  var joinedString = arrayOfStrings.join(string);
  // return the joinedString variable
  return joinedString;
}

function applySplit(stringToBeSplit, splitter) {
  // create a splitString variable
  // assign it to an array which contains the elements in the stringToBeSplit separated by the splitter
  var splitString = stringToBeSplit.split(splitter);
  // return the splitString variable
  return splitString;
}

function applyIndexOfToArray(array, element) {
  // create an index variable
  // assign it to the index inside of array where element can be found
  var index = array.indexOf(element);
  // return the index variable
  return index;
}

// We are going to complete a function that takes in two parameters, one value is an object, possibly containing an array, as well as a key in that object, and returns whether the value located at the key is an array or not. Your function should create a variable, assign it to an expression that tells whether the input object's value located at the input key is an array or not, using the Array.isArray() method, then return that created variable.
function isAnArrayAgain(inputObj, key) {
  // create a result variable
  var innerPossiableArray = inputObj[key];
  var result = Array.isArray(innerPossiableArray);
  // assign it to a call to the applicable method
  // return the result variable
  return result;
}