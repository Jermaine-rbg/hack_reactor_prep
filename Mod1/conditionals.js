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

