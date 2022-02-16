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

