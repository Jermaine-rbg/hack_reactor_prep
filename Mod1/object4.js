// Write a function called "getProperty". Given an object and a key, "getProperty" returns the value of the property at the given key.

function getProperty(obj, key){
    return obj[key];
}

// Write a function called "addProperty". Given an object, and a key, "addProperty" sets a new property on the given object with a value of true.

function addProperty(obj, key){
    return obj[key] = true;
}

// Write a function called "removeProperty". Given an object and a key, "removeProperty" removes the given key from the given object.

function removeProperty(obj, key){
    delete obj[key];
}

// Write a function called "getFullName". Given a first and a last name, "getFullName" returns a single string with the given first and last names separated by a single space.


function getFullName(firstName, lastName){
    let result = firstName + '' + lastName;
    return result;
}

// Write a function called "getLengthOfTwoWords". Given 2 words, "getLengthOfTwoWords" returns the sum of their lengths.

function getLengthOfTwoWords(word){
    let length = word.length;
    return length;
}

function getLengthOfTwoWords(word1, word2){
    let length1 = word1.length
    let length2 = word2.length;
    let result = length1 + length2;
    return result;
}