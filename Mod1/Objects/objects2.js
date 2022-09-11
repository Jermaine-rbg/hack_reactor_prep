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

// next we will declare a function that takes in an object, and a key, and returns the value located at the inputted key
function returnAValue(obj, key) {
    return obj[key]
    
};

let computer = {
    name: 'MacBook Air',
    version: '10.14.6',
    processer: '2 GHz H1 chip',
    memory_gb: 16
};

let nameOfKey = "name";
let valueAtKey = returnAValue(computer, nameOfKey);
console.log('valueAtKey:', valueAtKey);

let sense = true;
// to describe nonsense
let nonsense = !sense
console.log('nonsense:', nonsense);

let notNonsense = !nonsense;
console.log('not nonsense:', notNonsense);



console.log(true || true);
console.log(true || true);