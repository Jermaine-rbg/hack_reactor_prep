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