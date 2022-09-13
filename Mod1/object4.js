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