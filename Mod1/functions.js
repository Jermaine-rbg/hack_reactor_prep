// Functions are one of the fundamental building blocks in JS
// A function is a JavaScript procedure, which is:
// A set of statements that perform a task or calculate a value
// A function definition (or declaration) consists of a function keyword, followed by:
// The name of the function
// A list of parameters to the function, enclosed in parentheses and separated by commas
// The JS statements that define the function, enclosed in curly braces 

// definition
function nameOfFunction(/*list of parameters*/) {
    /*statements that define the function*/
  }
  
  //calling the function test
  var result = nameOfFunction(/*list of arguments*/);
  console.log(result);

  function FilterOddElements(numbers) {

    var oddNumbers = [];

    for (var i = 0; i < numbers.length; i++){
      if (numbers[i] % 2 === 1) {
        oddNumbers.push(numbers[i])
      }
    }
    
    return oddNumbers;
  }
