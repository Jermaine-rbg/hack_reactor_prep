// input is an array of numbers 

function computeSumOfAllElements(numbers) {
    // If input array is empty, the function should return 0
    if (numbers.length === 0){
        return 0;
    }
    // Create a sum variable, set to 0
    var sum = 0;
    // iterate over numbers using for loop
     for( var i = 0; i < numbers.length; i++){
    // reassign sum to be sum plus current value 
    sum += numbers[i];
     }
    return sum;
}

// input is array of numbers
function computeAverageOfNumbers(numbers){
    // if input is empty
    if (numbers.length === 0){
        return 0;
    }
    // create a sum variable
    let sum = 0;
    // iterate over all numbers using for loop
    for (let i = 0; i < numbers.length; i++){
        // increment sum by value
        sum += numbers[i];
    }
    return sum / numbers.length;
      
}