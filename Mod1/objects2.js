// lets look at an object with boolean values
let booleanObj = {
    richRollin: true,
    organization: false
}

// object with number values
let numbersObj = {
    set: 60,
    street: 17
}

// object with string values 
let stringObj = {
    name: "rich rollin",
    currentTitle: "Crips",
    futurePosition: "OG"
}

let valueOfName = stringObj.name;
console.log('accessed using dot notation:', valueOfName);

console.log('type of true:', typeof true);
console.log('type of 4.0:', typeof 4.0);
console.log('type of 9', typeof 9);
console.log('type of "a string of characters":', typeof "a string of characters");

//first, we will declare a function that takes an object parameter and returns it
function returnObject(object){
    return object;
}

let user = {
    id: 60,
    name: 'Jermaine Bailey',
    occupation: 'software engineer'
};

// we are defining a variable that we will pass to our function as an argument
let resultObject = returnObject(user)
console.log('resultObject:', resultObject);