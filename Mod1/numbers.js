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