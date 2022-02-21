// In real life, a car is an object

// A car has properties like weight and color, and methods like start and stop:

// An object is a collection of properties

// A property is an association between a name (key) and a value (some data type)

// A property's value can be any of the types we have gone over, as well as being another object, or even a function

// In the case where the value of a property is a function, we refer to the property as a method

// first let us look at an object with boolean values

var booleanObj = {
    isObject: true,
    isString: false
};

// next, let us look at an object with number values

var numbersObj = {
    count: 4,
    remaining: 7
};

// finally, let us look at an object with string values

// Spaces and line breaks are not important. A declaration can span multiple lines:

var stringObj = {
    name: 'Daisy',
    currentTitle: 'pupper',
    futurePosition: 'doggo'
}

// We need to know the name of the object, and the name of the key

// Two ways to do same thing:

// Can use "dot notation"

// Can use "bracket notation"

var petDog = {
    name: 'Daisy',
    currentTitle: 'pupper',
    futurePosition: 'doggo'
  };
  
  // to access a value within an object
  var valueOfName = petDog.currentTitle;
  console.log('accessed using dot notation:', valueOfName);

  // Or 
  var petDog = {
    name: 'Daisy',
    currentTitle: 'pupper',
    futurePosition: 'doggo'
  };
  
  var valueOfName = petDog['name'];
  console.log('accessed using bracket notation:', valueOfName);
  

  // One very useful tool in programming is the typeof operator

  // Its functionality is rather simple, and when applied to a value, it will tell you the type of value in question

  // Run the following code in a console to get a sense of how this works:

  // Arrays are a special type of objects. The typeof operator in JavaScript returns "object" for arrays.

  console.log(typeof undefined); // we have left off the label for this message, but will include it for the rest
  console.log('type of true:', typeof true);
  console.log('type of false:', typeof false);
  console.log('type of 9', typeof 9);
  console.log('type of 4.0:', typeof 4.0);

  // An array is a special variable, which can hold more than one value:

  // When dealing with arrays, it is important to remember that in JavaScript, arrays are "list like objects"

  // Let's look at how to tell the difference between arrays and objects, using Array.isArray():

  console.log('Is an array?:', Array.isArray([3, 4, 5]));
  console.log('Is an array?:', Array.isArray({a: 1})); 

  //first, we will declare a function that takes an object parameter and returns it
function returnObject(object) {
    return object;
  }

  var user = {
    id: 4,
    name: 'Robert Solomon',
    occupation: 'Mathematician'
  }; // we are defining a variable that we will pass to our function as an argument
  var resultObject = returnObject(user); // now, we call the function with 'user' as our argument
  console.log('resultObject:', resultObject);

  // next we will declare a function that takes in an object, and a key, and returns the value located at the inputted key
function returnAValue(obj, key) {
  return obj[key];
}

var computer = {
  name: "MacBook Pro",
  version: "10.14.6",
  processor: "2 GHz Intel Core i7",
  memory_gb: 8
};
var nameOfKey = "version";
var valueAtKey = returnAValue(computer, nameOfKey);
console.log('valueAtKey:', valueAtKey);

// we will now declare a function that takes no parameters, creates an object, and returns the newly created object
function createAndReturnAnObject() {
  var newObj = {a: 1, b: 2};
  return newObj;
}

var resultObject = createAndReturnAnObject();
console.log('resultObject:', resultObject);

// let us write a function that returns the type of argument the function has been called with (assume the argument will be scalar - not a collection)
function getType(param) {
  return typeof param;
}

var numType = getType(56);
console.log('numType:', numType);

var stringType = getType('serial number');
console.log('stringType:', stringType);

var undefinedType = getType();
console.log('undefinedType:', undefinedType); //think carefully about what is happening here

// let us write a function that returns true if the argument is an Array, and returns false if it is not
function determineIsAnArray(input) {
  var isAnArray = Array.isArray(input);
  return isAnArray;
}

var affirmative = determineIsAnArray([1, 2, 3]);
console.log('affirmative:', affirmative);

var negative = determineIsAnArray({a: 1});
console.log('negative:', negative);

var stringsObj ={
  name:"jermaine",
  carreer: "software enginneer",
  jobNow: "slave"
}

console.log(stringsObj["jobNow"]);
// the brackets pull the key value from the function