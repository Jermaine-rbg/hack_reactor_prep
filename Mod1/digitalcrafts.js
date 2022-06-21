console.log('Hello World');

// const friendlyGreeting = "Hello";
// console.log(friendlyGreeting);

// You can combine Strings by using the + operator. Though it looks like the math symbol for addition, it is called the concatenation operator when used with Strings.

const friendlyGreeting = "Hello" + "World";
console.log(friendlyGreeting + "" + "World");

const firstNumber = 60;
const lastNumber = 60;
const nhood = firstNumber + lastNumber;
console.log(nhood);
console.log("Rolling", nhood, "Crips")

// Up to now, we have passed the console.log() function multiple values, separated by commas. If we wanted to do something more complicated with the output, we might need to use the string interpolation syntax.

const theAnswer = 30 + 30;
console.log(`The answer is ${theAnswer} Isn't that great`);

const friendInfo = {
     name: "Jermaine Bailey",
     cell: "3370967",
     rollinsixowe: "Crip",
     crip: "60"
};

let hood = ["rolling six owe", "rollin four owe", "dead end blocc"];
let naybor = hood;
console.log(naybor);
