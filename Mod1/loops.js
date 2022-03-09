// Iteration is the number of time(s) a loop can be executed

// They are not exactly the same idea, but:
// We will loop over the array, and
// We will iterate over the array,
// Both mean essentially the same thing

// Here is a quick look at a for loop doing the same thing:

for (var num = 1; num <= 5; num++) {
    console.log(num);
  }

// Both while and for loops need a stop condition to stop running
// If you fail to account for this, you will create an infinite loop
// Do not panic, as this happens to all first-timers
// Simply quit your window/browser and come back

// Loop over sequence of numbers
// Let us consider the case of wanting to look at, or do something, to a range of numbers
// We can do so with a specific while loop

var x = 1;
while (x <= 10) {
  console.log(x);
  x++;
}

// We can also do this with variables:

var startOfRange = 1;
var endOfRange = 10;

while (startOfRange <= endOfRange) {
  console.log(startOfRange);
  startOfRange++;
}





