// A JavaScript string stores a series of characters

// A string can be any text inside of double or single quotes

// It is possible to access an entire string, or an individual character within it

// To that end, the characters in a string are "indexed", and the indexes start at 0

// For a demonstration of this concept

var testString = 'words';

var firstCharacter = testString[0]; // accesses the first character: 'w'
var thirdCharacter = testString[2]; // accesses the third character: 'r'
console.log(firstCharacter); // will log 'w'
console.log(thirdCharacter); // will log 'r'

// A string does not need to have anything in it to still be considered a string

var emptyString = "";
console.log(emptyString);