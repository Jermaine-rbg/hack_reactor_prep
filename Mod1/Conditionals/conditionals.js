// What is Pseudocode?
// We have seen it before
// English language statements that describe what the code will do
// Should be structured similarly to the way the eventual code will be (indentation, etc.)
// Each line of pseudocode should correspond to one line of actual code

// A conditional that allows your program to do something, if some condition is true
// Armed with an if statement, this is easily translatable into code:

var rollinSixOwe = true;

if (rollinSixOwe === true) {
  console.log("you cripping");
}

// if statement with undefined

var declared;

if (declared === undefined) {
  console.log('declared is undefined');
}

// if statement with numbers

// var nhood = 60;
// var harlem = 30;
// > greater than
// if (nhood > harlem) {
//console.log('This crip gang the biggest');
// }

var nhood = 60;
var harlem = 30;
// > greater than
if (nhood > harlem) {
  console.log('This crip gang the smallest');
}

// if statement with a string

var password = 'password123';
// if password is less than 15 and greater than 4
if (password.length < 15 && password.length > 4) {
  console.log('password is of appropriate length');
}

function isItUndefined(param) {
    // if param is defined (or not undefined)
    if (param !== undefined) {
      // return 'Input is defined'
      return "Input is defined";
    }
  }

  function fewerApples(apples, oranges) {
    // if there are fewer apples than oranges
    if (apples < oranges){
      // return 'There are fewer apples than oranges'
      return "There are fewer apples than oranges";
    }
  }

  function validLengthPassword(password) {
    // if password length is greater than 4 and less than 15
    if (password.length > 4 && password.length < 15){
      // return 'Password length is valid'
      return "Password length is valid";
    }
  }

  function generateReportSummary(reportTotals, teamName) {
    var teamTotal = reportTotals[teamName];
  // if teamName's report total is greater than 5
  if (teamTotal > 5) {
    // return '{teamName} has surpassed goal with {number_of_reports_for_team} reports'
    return teamName + ' has surpassed goal with ' + teamTotal + ' reports';
  }
}

// A conditional that allows your program to do something, if some condition is true, and do something else, if that same condition is false

// change to false to see 'else' option
var creedIsThere = true;

if (creedIsThere) {
  console.log("I will go");
} else {
  console.log("I will stay home");
}


// if (/*some expression which evaluates to true or false*/) {

//   /*some action to be taken in the event
//   that the expression above evaluates to true*/

// } else {

//   /*some action to be taken in the event
//   that the expression above evaluates to false*/

// }

// give declared a falsy value to see 'else' condition
var declared = 'something';

if (declared) {
  console.log('declared has a truthy value');
} else {
  console.log('declared has a falsy value');
}

// change values of dogs/cats to see 'else' condition
var dogs = 9;
var cats = 8;

if (dogs > 8 && cats < 9) {
  console.log('number of cats and dogs is acceptable');
} else {
  console.log('number of cats or dogs is not acceptable');
}


// change to a shorter password to see 'else' condition
var password = 'pa$$wordIsLongEnough';

if (password.length > 8) {
  console.log('Password is long enough');
} else {
  console.log('Please enter a password of at least 9 characters');
}

var ingredientsList = ['flour', 'sugar', 'eggs'];
// change to ingredient not in list to see 'else' condition
var ingredientInQuestion = 'sugar'

if (ingredientsList.indexOf(ingredientInQuestion) > -1 ) {
  console.log(ingredientInQuestion + ' is on the list');
} else {
  console.log(ingredientInQuestion + ' is not on the list');
}

// change the values to see 'else' condition
var fruitTotals = {bananas: 4, strawberries: 12};

if (fruitTotals.bananas > 3 && fruitTotals.strawberries > 10) {
  console.log('We have enough fruit, with ' + fruitTotals.bananas + ' bananas, and ' + fruitTotals.strawberries + ' strawberries');
} else {
  console.log('We do not have enough of both fruits');
}

var result1 = isItTruthy('anything');
console.log('should log "Input is truthy":', result1);

var result2 = isItTruthy();
console.log('should log "Input is falsy":', result2);

var result3 = isItTruthy("");
console.log('should log "Input is falsy":', result3);

var result4 = isItTruthy(false);
console.log('should log "Input is falsy":', result4);

// We are going to complete a function that takes in one parameter, determines if that parameter is truthy or falsy, and returns a specific string for each case. Your function should use an if else statement to determine if the input parameter is truthy, and if it is, should return the string 'Input is truthy', or, if the input parameter is falsy, should return the string 'Input is falsy'. 

function isItTruthy(param) {
  // if param is truthy
  if (param){
    // return 'Input is truthy'
    return 'Input is truthy';
  } else {
  // otherwise
    // return 'Input is falsy'
    return 'Input is falsy';
  }
}


function balancePets(dogs, cats) {
  // if there are more than 8 dogs and fewer than 9 cats
  if (dogs > 8 && cats < 9){
    // return 'number of cats and dogs is acceptable'
    return 'number of cats and dogs is acceptable'
  } else {
  // otherwise
    // return 'number of cats or dogs is not acceptable'
    return 'number of cats or dogs is not acceptable'
  }
}

function passwordLongEnough(password) {
  // if password length is greater than 8
  if (password.length > 8) {
    // return 'Password is long enough'
    return 'Password is long enough'
  }
  // otherwise
  else {
    // return 'Please enter a password of at least 9 characters'
    return 'Please enter a password of at least 9 characters'
  }
}

function findIngredient(ingredientList, ingredientToSearchFor) {
  // if ingredientToSearchFor is present within ingredientList
  if (ingredientList.indexOf(ingredientToSearchFor) > -1 ) {
    // return '{ingredientToSearchFor} is on the list'
    return ingredientToSearchFor + ' is on the list';
  }
  // otherwise
  else {
    // return '{ingredientToSearchFor} is not on the list'
    return ingredientToSearchFor + ' is not on the list';
  }
    
}

// A conditional that allows your program to do something, if some condition(1) is true, and do something else, if that same condition(1) is false and another condition(2) is true, and lastly, to do a third action if both condition(1) and condition(2) are both false

// change to false to see 'else if' option
var dennysIsOpen = true;
// change both to false to see 'else' option
var iHopIsOpen = true;

if (dennysIsOpen) {
  console.log('We will dine at Denny\'s');
} else if (iHopIsOpen) {
  console.log('We will dine at IHop');
} else {
  console.log('We will make pancakes at home');
}

function measureRequiredFruit(fruitTotals) {
  var totalBananas = fruitTotals.bananas;
  var totalStrawberries = fruitTotals.strawberries;
// if there are more than 3 bananas and more than 10 strawberries
if (totalBananas > 3 && totalStrawberries > 10) {
  // return 'We have enough fruit, with {totalBananas} bananas, and {totalStrawberries} strawberries'
  return 'We have enough fruit, with ' + totalBananas + ' bananas, and ' + totalStrawberries + ' strawberries';
  
} else {
// otherwise
return 'We do not have enough of both fruits';
  // return 'We do not have enough of both fruits'
}
}

// if (/*some expression which evaluates to true or false*/) {

//   /*some action to be taken in the event
//   that the expression above evaluates to true*/

// } else if (/*some other expression which evaluates to true or false*/) {

//   /*some action to be taken in the event
//   that the first expressions evaluates to false
//   and the second expression above evaluates to true*/

// } else {

//   /*some action to be taken in the event
//   that the first expressions evaluates to false
//   and the second expression above evaluates to false*/

// }

// change to 'paper' or 'scissors' to see other choices
// Gotta stay on top of things 
var choice = 'rock';

if (choice === 'rock') {
  console.log('Player 1 chose ' + choice);
} else if (choice === 'paper') {
  console.log('Player 1 chose ' + choice);
} else if (choice === 'scissors') {
  console.log('Player 1 chose ' + choice);
} else {
  console.log('Player 1 has chosen poorly!');
}

var shirtWidth = 25;

if (shirtWidth >= 20 && shirtWidth < 30) {
  console.log('You should select a size S');
} else if (shirtWidth >= 30 && shirtWidth < 40) {
  console.log('You should select a size M');
} else if (shirtWidth >= 40 && shirtWidth < 50) {
  console.log('You should select a size L');
} else {
  console.log('You should select a different shirt');
}

