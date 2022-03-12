// Iteration is the number of time(s) a loop can be executed

// They are not exactly the same idea, but:
// We will loop over the array, and
// We will iterate over the array,
// Both mean essentially the same thing

// Here is a quick look at a for loop doing the same thing:

for (var num = 1; num <= 5; num++) {
    console.log(num);
  }

// Both while and for loops need a stop condition to stop running
// If you fail to account for this, you will create an infinite loop
// Do not panic, as this happens to all first-timers
// Simply quit your window/browser and come back

// Loop over sequence of numbers
// Let us consider the case of wanting to look at, or do something, to a range of numbers
// We can do so with a specific while loop

var x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

// We can also do this with variables:

var startOfRange = 1;
var endOfRange = 10;

while (startOfRange <= endOfRange) {
  console.log(startOfRange);
  startOfRange++;
}


// We are going to complete a function that takes two parameters, both will be integers (start, end), and logs to the console, all of the integers starting with start, and ending with end. Your function should use a while loop to log each integer from start, up to and including end, then return nothing. 

function loopASequence(start, end) {
    // create a loop which runs if start is less than or equal to end
    while (start <= end) {
      // log current value of start to console
      console.log(start);
      // increment value of start
      start++;
    }
  }

  // We are going to complete a function that takes one parameter, an array of elements, and logs all of its elements (one at a time) to the console. Your function should use a while loop to log each element from the beginning to the end of the array, then return nothing.

  function loopAnArray(array) {
    // create an index variable
    var index = 0;
    // create a loop which iterates over the input array
    while (index < array.length) {
      // log current array element to the console
      console.log(array);
      // increment value of index variable
      array++;
    }
  }

  // We are going to complete a function that takes one parameter, a string of characters, and logs all of its characters (one at a time) to the console. Your function should use a while loop to log each character from the beginning to the end of the string, then return nothing.

  function loopAString(string) {
    // create an index variable
    var i = 0;
    // create a loop which iterates over the input string
    while (i < string.length) {
      // log current string character to the console
      console.log(string[i]);
      // increment value of index variable
      i++;
    }
  }

 // We are going to complete a function that takes two parameters, both will be integers (start, end), and logs to the console, all of the integers starting with start, and ending with end. Your function should use a for loop to log each integer from start, up to and including end, then return nothing
 
 function loopASequenceAgain(start, end) {
  // create a loop which loops from start to end
  for (var x = start; x <= end; x++) {
    // log current value to console
    console.log(x);
  }
    

}

function loopAnArrayAgain(array) {
  // create a loop which iterates over the input array
  for (var i = 0; i < array.length; i++) {
    // log current array element to the console
    console.log(array[i]);
  }
}

// We are going to complete a function that takes one parameter, a string of characters, and logs all of its characters (one at a time) to the console. Your function should use a for loop to log each character from the beginning to the end of the string, then return nothing. 

function loopAStringAgain(string) {
  // create a loop which iterates over the input string
  for ( var i = 0; i < string.length; i++) {
    // log current string character to the console
    console.log(string[i])
  }
}

// We are going to complete a function that takes one parameter, an array of elements, and logs every other one of its elements, beginning at index 0, to the console. Your function should use a loop to log every other element from the beginning, skipping every other element, until either end of the array, or one shy of the end (depending on odd or even length of the array passed), then return nothing.

function loopEveryOther(array) {
  // create a loop which iterates over every other element of the input array
 for (var i =0; i < array.length; i+=2) {
    // log every other array element to the console
    console.log(array[i]);
 }
    
}

//We are going to complete a function that takes two parameters, an array of elements, and an index, and logs every element, beginning at the inputted index (one at a time) to the console. Your function should use a loop to log every element from the inputted index, until the end of the array, then return nothing.

function loopStartingAtIndex(array, index) {
  // create a loop which iterates from index to the end of the input array
  for (var i = index; i < array.length; i++) {
    // log current array element to the console
    console.log(array[i]);
  }
}

function loopInReverse(array) {
  // create a loop which iterates from back to front of the input array
  for (var i = array.length -1; i > -1; i--) {
    // log current array element to the console
    console.log(array[i]);
  }
}

// We are going to complete a function that takes one parameter, an array of elements, and logs every element, beginning at the back of the input array and ending at the front of the input array, to the console. Your function should use a loop to log every element from the back of the array, up to the front of the array, then return nothing. 

// We are going to complete a function that takes two parameters, an array of elements and an index, and logs every element, except for the element at the input index, to the console. Your function should use a loop to log every element except one at the inputted index, and should also use a continue statement (must use a semi-colon after continue for tests to pass) to skip over the value at the inputted index, then return nothing. Your code should NOT use else.

function useContinue(array, index) {
  // create a loop which iterates over the input array
 for (var i = 0; i < array.length; i++) {
    // if current index is equal to input index
    if (i === index){
        continue;
    }
     // use described statement to skip to next iteration of loop (must include semi-colon!)
    // log current array element to the console
    console.log(array[i]);
 }
}

// We are going to complete a function that takes two parameters, an array of elements and an index, and logs every element, except those whose index is greater than the input index. Your function should use a loop to log every element up to and including the element located at the input index, and should also use a break statement (must use a semi-colon after break for tests to pass) to skip over the values with indexes greater than that of the input index, then return nothing. Your code should NOT use else.

function useBreak(array, index) {
  // create a loop which iterates over the input array
  for (var i = 0; i < array.length; i++) {
    // if current index is greater than input index
    if (i > index) {
      // use described statement to stop the loop completely (must include semi-colon!
      break;
    }
    // log current array element to the console
    console.log(array[i]);
  }
}

// A for-in statement allows us to loop over the properties in an object
// We are going to complete a function that takes one parameter, an object of properties, and logs all of its keys (one at a time) to the console. Your function should use a for-in loop to log each key in the object, then return nothing. DO NOT USE Object.keys() in your solution. 

function loopOverKeys(object) {
  // create a loop which iterates over the input object
  for (var currentKey in object){
    // log current key to the console
    console.log(currentKey);
  }
}

// We are going to complete a function that takes one parameter, an object of properties, and logs all of its values (one at a time) to the console. Your function should use a for-in loop to log each value in the object, then return nothing. DO NOT USE Object.values() in your solution.

function loopOverValues(object) {
  // create a loop which iterates over the input object
  for (var key in object) {
      var currentValue = object[key];
    // log current value to the console
    console.log(currentValue);
  }
}

// We are going to complete a function that takes one parameter, an array of arrays, and logs all of its elements (log each element in first inner array, start to end, then second inner array, and so on...) to the console. Your function should use a nested for loop to log each element from all inner arrays, then return nothing.

function loopAnArrayOfArrays(arrayOfArrays) {
  // create a loop which iterates over the input array
  for (var i = 0; i < arrayOfArrays.length; i++) {
   for (var j = 0; j < arrayOfArrays[i].length; j++) {
  
    // create an inner loop which iterates over current inner array
      // log current element to the console
      console.log(arrayOfArrays[i][j])
   }
  }
}

function loopAnObjectOfObjects(nestedObject) {
  // create a loop which iterates over the input object
  for (var key in nestedObject){
      for (var innerKey in nestedObject[key]){
    // create an inner loop which iterates over current inner object
      // log current value to the console
      console.log(nestedObject[key][innerKey]);
      }
  }
}

// We are going to complete a function that takes one parameter, a array of objects, and logs all of its values (log each value in first inner object, one at a time, then second inner object, and so on...) to the console. Your function should use a for-in loop nested inside of a for loop to log each value from all inner objects, then return nothing.

function loopAnArrayOfObjects(arrayOfObjects) {
  // create a loop which iterates over the input array
  for (var i =0; i < arrayOfObjects.length; i++){
    var innerObj = arrayOfObjects[i]
    // create an inner loop which iterates over current inner object
    for (var key in innerObj){
      // log current value to the console
      console.log(innerObj[key]);
    }
  }
}

// We are going to complete a function that takes one parameter, a object of arrays, and logs all of its values (log each value in first inner array, one at a time, then second inner array, and so on...) to the console. Your function should use a for loop nested inside of a for-in loop to log each value from all inner arrays, then return nothing. 

function loopAnObjectOfArrays(objectOfArrays) {
  // create a loop which iterates over the input object
  for (var key in objectOfArrays){
    // create an inner loop which iterates over current inner array
    var innerArr = objectOfArrays[key];
    for (var i =0; i < innerArr.length; i++){
      // log current value to the console
      console.log(innerArr[i]);
    }
  }
}

// We are going to complete a function that takes two parameters, both arrays, and logs all possible combinations of elements separated by a space (see example for details...) to the console. Your function should use a nested for loop to log all combinations of the two arrays, then return nothing.

function generateCombinations(array1, array2) {
  // create a loop which iterates over the first array
  for (var i = 0; i < array1.length; i++) {
    for (var j = 0; j < array2.length; j++){
    // create an inner loop which iterates over the second array
      // log current element of first array and current element of second array to the console with space in between
      console.log(array1[i], array2[j]);
    }
  }
}