let emptyString = '';
console.log(emptyString);

// first we will declare a function that takes a string parameter and returns it

function returnString(string) {
    return string;
    
}

let resultString = returnString('richRollin')
console.log(resultString);

// function hackReactor(strings) {
//     return strings;
    
// }


// let prepMod = hackReactor('multiple params');
// console.log('prepMod:', prepMod); // we have added console.log messages to help us identify which variable is which when this code is run in the console

// next, we will declare a function that takes a string parameter and returns the first letter
function returnFirstCharacter(string) {
    return string[0];
    
}

let firstCharacter = returnFirstCharacter('prepMod')
console.log('firstCharacter:', firstCharacter);
