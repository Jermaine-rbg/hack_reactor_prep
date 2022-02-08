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

  console.log(typeof undefined); // we have left off the label for this message, but will include it for the rest
  console.log('type of true:', typeof true);
  console.log('type of false:', typeof false);
  console.log('type of 9', typeof 9);
  console.log('type of 4.0:', typeof 4.0);


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