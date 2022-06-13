// There is one number type in JS, and it is called Number

// If a value is of type "number", it can be positive, negative, an integer, or a floating-point (decimal)

// In addition to being able to represent integers and floating-point numbers, the number type has three symbolic values: +Infinity, -Infinity, and NaN (not-a-number, see below for more information on NaN)

// Let us consider the case of wanting to add together two values and that these values happen to be numbers

// We can do so using the + operator:

var sum = 3 + 4;
console.log('sum:', sum);

// We can also do this with variables whose values are numbers:

var numberOfApples = 3;
var numberOfBananas = 4;
var totalFruit = numberOfApples + numberOfBananas;
console.log('totalFruit:', totalFruit);

// We are going to complete a function that takes in two number parameters, and returns their sum when added together. 
// Your function should create a variable and assign it to the result of adding the two input parameters together using the + operator, then return that variable. 
// Below is an example of the code running, assuming that you will have completed the described function: getSum.

// var resultSum = getSum(4, 10);
// console.log('should be 14:', resultSum);

// Let us consider the case of wanting to multiply one number by another number

// We can do so using the * operator:

var product = 7 * 4;
console.log('product:', product);

// We can also do this with variables whose values are numbers:

var numberOfStores = 7;
var numberOfEmployeesPerStore = 4;
var numberOfTotalEmployees = numberOfStores * numberOfEmployeesPerStore;
console.log('numberOfTotalEmployees:', numberOfTotalEmployees);

var resultProduct = 9 * 4;
console.log('should be 36:', resultProduct);

// Let us consider the case of wanting to divide one number by another number

// We can do so using the / operator:

var quotient = 24 / 6;
console.log('quotient:', quotient);

// We can also do this with variables whose values are numbers:

// var slicesOfPizza = 24;
var slicesOfPizza = 24; 
var numberOfPeople = 6;
var slicesPerPerson = slicesOfPizza / numberOfPeople;
console.log('slicesPerPerson:', slicesPerPerson); // no worries, the slices are not that big

// Let us consider the case of wanting to raise one number to the power of another number

// We can do so using the ** operator:

var power = 2 ** 5;
console.log('power:', power);

// We can also do this with variables whose values are numbers:

var choicesPerCategory = 2;
var numberOfCategories = 5;
var totalNumberOfChoices = choicesPerCategory ** numberOfCategories;
console.log('totalNumberOfChoices:', totalNumberOfChoices);

function getPower(num1, num2) {
    // create a result variable,
    // assign it to num1 raised to the num2 power
    result = num1 ** num2;
    // return the result variable
    return result;
  }

  // Let us consider the case of wanting the remainder after dividing one number by another number

  // We can do so using the % operator:

  var remainder = 11 % 2;
console.log('remainder:', remainder);

// We can also do this with variables whose values are numbers:

var numberOfSocks = 11;
var numberOfSocksPerPerson = 2;
var numberOfSocksRemaining = numberOfSocks % numberOfSocksPerPerson;
console.log('numberOfSocksRemaining:', numberOfSocksRemaining);

function getRemainder(num1, num2) {
    // create a result variable,
    // assign it to remainder after dividing num1 by num2
    result = num1 % num2;
    // return the result variable
    return result;
  }

  // Let us consider the case of wanting to increment a variable's value

  // We can do so using the += operator:

var increment = 11;
increment += 2;
console.log('increment:', increment);

// We can also do this with variables whose values are numbers:

var totalUnitsOfCargo = 11;
var additionalUnits = 2;
totalUnitsOfCargo += additionalUnits;
// totalUnitsOfCargo = totalUnitsOfCargo + additionalUnits
console.log('totalUnitsOfCargo:', totalUnitsOfCargo);

function increment(base, incrementer) {
    // reassign base to result of incrementing base by incrementer
    result = base += incrementer;
    // return base
    return base;
  }

  // Let us consider the case of wanting to decrement a variable's value

  // We can do so using the -= operator:

var decrement = 13;
decrement -= 3;
console.log('decrement:', decrement);

// We can also do this with variables whose values are numbers:

var totalUnitsAvailable = 13;
var unitsSold = 3;
totalUnitsAvailable -= unitsSold;
// totalUnitsAvailable = totalUnitsAvailable - unitsSold
console.log('totalUnitsAvailable:', totalUnitsAvailable);

// Let us consider the case of wanting to multiply a variable's value by another, and reassign the first variable to the result of said operation

// We can do so using the *= operator:

var result = 10;
result *= 4;
console.log('result:', result);

// We can also do this with variables whose values are numbers:

var currentProduct = 10;
var multiplier = 4;
currentProduct *= multiplier;
// currentProduct = currentProduct * multiplier
console.log('currentProduct:', currentProduct);

function applyTimesEquals(base, multiplier) {
    // reassign base to result of multiplying base by multiplier
    base *= multiplier;
    // return base
    return base;
  }

  // Let us consider the case of wanting to divide a variable's value by another, and reassign the first variable to the result of said operation

  // We can do so using the /= operator:

var result = 55;
result /= 5;
console.log('result:', result);

// We can also do this with variables whose values are numbers:

var currentQuotient = 55;
var divider = 5;
currentQuotient /= divider;
// currentQuotient = currentQuotient / divider
console.log('currentQuotient:', currentQuotient);

// Let us consider the case of wanting to get the absolute value of a number

// We can do so using the Math.abs() method:

var original = -295;
console.log('absolute value applied:', Math.abs(original));

// We can also do this with variables whose values are numbers:
var position1 = 5;
var position2 = 300;
var difference = position1 - position2;
var magnitudeDifference = Math.abs(difference)
console.log('magnitudeDifference:', magnitudeDifference);

// Let us consider the case of wanting to round a number either up or down

// We can do so using the Math.ceil() (up), and the Math.floor() (down) methods:

var original = 33.7;

console.log('rounded up:', Math.ceil(original));
console.log('rounded down:', Math.floor(original));

// We can also do this with variables whose values are numbers:

// var score = 89.4;
var gradeFromATeacherWhoGetsIt = Math.ceil(score);
var gradeFromAMonsterInTeachersClothes = Math.floor(score);

console.log('gradeFromATeacherWhoGetsIt:', gradeFromATeacherWhoGetsIt);
console.log('gradeFromAMonsterInTeachersClothes:', gradeFromAMonsterInTeachersClothes);

function roundDown(num) {
    // create a result variable
    // assign it to input, rounded down
    var result = Math.floor(num);
    // return result
    return result;
  }

  function roundUp(num) {
    // create a result variable
    // assign it to input, rounded up
    var result = Math.ceil(num);
    // return result
    return result;
  }

  // Let us consider the case of wanting to take a string version of a number, and get an actual number

  // We will examine two cases, wanting to "parse" an integer, and:

  // Wanting to parse a float (decimal)

  // We can do so using the Number.parseInt(), and the Number.parseFloat() methods:

  // var parsedInteger = Number.parseInt("49");
console.log('parsedInteger:', parsedInteger);

var parsedFloat = Number.parseFloat("29.45")
console.log('parsedFloat:', parsedFloat);

// We can also do this with variables whose values are string versions of numbers:

var userIdString = "49";
var parsedUserId = Number.parseInt(userIdString);
console.log("parsedUserId:", parsedUserId);

var userRatingString = "29.45";
var parsedUserRating = Number.parseFloat(userRatingString)
console.log('parsedUserRating:', parsedUserRating);


// Let us consider the case of wanting to generate a random number

// We can do so using the Math.random() method
// Math.random() will generate a number between 0 and 1
// The number generated can be 0, but will not be 1

// A little more work is required to get a random number between two specific values

// generate a random number between 0 and 1
console.log('random number between 0 and 1:', Math.random());

// generate a random number between 1 and 10
var randomBetween1And10 = Math.random() * (10 - 1) + 1;
console.log('randomBetween1And10:', randomBetween1And10);

// We can also do this with variables whose values are numbers:

var min = 90;
var max = 100;
var randomBetweenMinAndMax = Math.random() * (max - min) + min;
console.log("randomBetweenMinAndMax:", randomBetweenMinAndMax);


// We are going to complete a function that takes in two number parameters (base, incrementer), and returns the result of incrementing the base by the incrementer. Your function should reassign base to the result of incrementing base by incrementer using the += operator, then return base.
function increment(base, incrementer) {
  // reassign base to result of incrementing base by incrementer
  base += incrementer;
  // return base
  return base;
}



// We are going to complete a function that takes in two number parameters (base, decrementer), and returns the result of decrementing the base by the decrementer. Your function should reassign base to the result of decrementing base by decrementer using the -= operator, then return base.
function decrement(base, decrementer) {
  // reassign base to result of decrementing base by decrementer
  base -= decrementer
  // return base
  return base;
}

function applyTimesEquals(base, multiplier) {
  // reassign base to result of multiplying base by multiplier
  base *= multiplier;
  // return base
  return base;
}

