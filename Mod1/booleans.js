// Booleans are a logical value type

// Booleans can be true or false

var hardWork = true;
console.log(hardWork);

var noJob = false;
console.log(noJob);

// two examples of functions that return a boolean type value:

// first we will declare a function that takes no parameters, does nothing, and returns true
function isTrue() {
    return true;
  }
  var trueResult = isTrue(); // this line "calls" the function and assigns the value returned to trueResult
  console.log(trueResult); // if you run this code in the console, you can see that trueResult has been set to a value of true
  
// next, we will declare a function that takes no parameters, does nothing, and returns false
function isFalse() {
    return false;
  }
  var falseResult = isFalse(); // this line "calls" the function and assigns the value returned to falseResult
  console.log(falseResult); // if you run this code in the console, you can see that falseResult has been set to a value of false
// Now we are going to complete a function that takes no parameters and returns true.


// Add a statement that will cause this function to return true when ran.

function returnTrue() {
    return true;
  // returns true
}

// Not ( ! )

var sense = true;
// to describe nonsense
var nonsense = !sense;
console.log('nonsense:', nonsense);

var notNonsense = !nonsense;
console.log('not nonsense:', notNonsense);

// return !boolean

// Or ( || )

// There are four cases to examine when comparing two boolean values:

console.log(true || true);
console.log(true || false);
console.log(false || true);
console.log(false || false);

// We can demonstrate this same idea by creating a variable, and assigning it to the result of comparing the two variables using the || operator

var haveACar = true;
var bussesAreRunning = true;

var willAttendEvent = haveACar || bussesAreRunning;
console.log("I will attend the event:", willAttendEvent);

// We are going to complete a function that takes in two boolean parameters. 
// Your function should create a variable and assign it to the result of comparing the two input parameters using the || operator, then return that variable.

function eitherAreTrue(bool_1, bool_2) {
  // create a result variable
  // assign it to bool_1 OR bool_2
  var result = bool_1 || bool_2
  // return the result variable
  return result;
}

// We can also compare two boolean values and decide if BOTH of them are true:

console.log(true && true); // will log true
console.log(true && false); // will log false
console.log(false && true); // will log false
console.log(false && false); // will log false

// We can demonstrate this same idea by creating a variable, and assigning it to the result of comparing the two variables using the && operator

var friendCanGo = true;
var iCanGo = true;

var weWillAttend = friendCanGo && iCanGo;
console.log("Both my friend and I will go:", weWillAttend);

// We are going to complete a function that takes in two boolean parameters.
// Your function should create a variable and assign it to the result of comparing the two input parameters using the && operator, then return that variable. 

function bothAreTrue(bool_1, bool_2) {
  // create a result variable
  // assign it to bool_1 AND bool_2
  var result = bool_1 && bool_2;
  // return the result variable
  return result;
}