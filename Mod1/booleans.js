// Booleans are a logical value type

// Booleans can be true or false

var hardWorkPaysOff = true;
console.log(hardWorkPaysOff);

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

// We can have several scenarios where we compare more than two boolean values

// Linking together combinations of boolean comparisons can give our programs complexity

// var storeIsOpen = true;
// var isHungry = true;
// var isThirsty = true;

// var willGoToStore = storeIsOpen && (isHungry || isThirsty);
// console.log(willGoToStore); // will log true

function combination(bool_1, bool_2, bool_3) {
  // create a result variable
  // assign it to bool_1 AND either bool_2 OR bool_3
  var result = bool_1 && (bool_2 || bool_3)
  // return the result variable
  return result;
}

var outputTrue = combination(true, true, false);
console.log('should be true:', outputTrue);

var outputFalse = combination(false, true, true);
console.log('should be false:', outputFalse);

// Equal to ( === )
// This operator allows us to compare two scalar values directly
// Works with undefined, Booleans, Numbers, and Strings

// In the case of undefined:
var declared;
var undefinedMatch = declared === undefined;
console.log('undefinedMatch:',undefinedMatch);

// In the case of Booleans:
var isRaining = true;
var weatherPredictedRain = true;

var weathermanWasRight = isRaining === weatherPredictedRain;
console.log('weathermanWasRight:', weathermanWasRight);

// In the case of Numbers:
var expectedCount = 10;
var actualCount = 9;

var expectationsMet = expectedCount === actualCount;
console.log('expectationsMet:', expectationsMet);

// In the case of Strings:
var currentString = 'happiness';
var nextString = 'happiness';

var stringsMatch = currentString === nextString;
console.log('stringsMatch:', stringsMatch);

function returnTrue(){
  return true;
}

function areEqual(param_1, param_2) {
  // create a result variable
  var result = param_1 === param_2;
  // assign it to a comparison between param_1 and param_2 using "equal to" operator
  // return the result variable
  return result;
}
function areNotEqual(param_1, param_2) {
  // create a result variable
  var result = param_1 !== param_2;
  // assign it to a comparison between param_1 and param_2 using "not equal to" operator
  // return the result variable
  return result;
}
function returnTrue() {
  return true;

  }
console.log('returnTrue:');