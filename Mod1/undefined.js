// When we say var declaration;, we have declared a variable called declaration

// But, we have yet to assign it a particular value

// JavaScript handles this by storing the name of the variable in memory, and giving it a default value of undefined

var declaration;
//console.log(declaration);

// first, we declare a function that takes no parameters, does nothing, and returns nothing
function nothing() {
  
}

var returnValue = nothing(); // this line "calls" the function and assigns the value returned to returnValue
console.log(returnValue); // if you run this code in a console, you can see that returnValue is undefined

function returnsNothing(){
    
}
