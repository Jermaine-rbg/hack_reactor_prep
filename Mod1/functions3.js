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