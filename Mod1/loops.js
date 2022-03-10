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