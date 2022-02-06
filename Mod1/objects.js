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
  

  