// if statement with undefined

let declared;
if ( declared === undefined) {
    console.log('declared is undefined');
};

// if statements with numbers 
let apples = 60;
let oranges = 120;

if (apples < oranges){
    console.log('apples are less than oranges');
};

// if statemnts with strings 
//let password = 'Cripboys';

//if (password.length < 15 && password.length > 4){
    //console.log('password is long enough');
//};

// if statement with an array
let agentList = ['001', '005', '007', '009'];
let agentInQuestion = '007';
if (agentList.indexOf(agentInQuestion) > -1){
    console.log(agentInQuestion + 'found in agent list');
}

function gernerateReportSummary(reportTotals, teamName){
let teamTotal = reportTotals[teamName];
if (teamTotal > 5) {

    return teamName + ' surpass goal with ' + teamTotal + ' reports';
}
}

// change to fasle to see else option

let theLearningBegin = false;
if (theLearningBegin){
console.log('join a bootcamp');
} else{
    console.log('go self taught route');
}

// if (/*some expression which evaluates to true or false*/) {

//     /*some action to be taken in the event
//     that the expression above evaluates to true*/
  
//   } else {
  
//     /*some action to be taken in the event
//     that the expression above evaluates to false*/
  
//   }

// if else statement with numbers
let dogs = 9;
let cats = 8;

if (dogs > 8 && cats < 9 ){
    console.log('number of cats and dogs is acceptable');
} else {
    console.log('number of cats or dogs is not acceptable');
};

// if else statement with strings
// change to shorter password to see 'else' condidtion
let password = 'pa$$wordIsLongEnough';

if (password.length > 8 ){
    console.log('Password is long enough');
} else {
    console.log('Please enter a password of at least 9 characters');
}

// if else statement with an array

let ingredientsList = ['flour', 'sugar', 'eggs'];
// change to ingredient not in list to see 'else' condition
let ingredientInQuestion = 'sugar';

if (ingredientsList.indexOf(ingredientInQuestion) > 1){
    console.log(ingredientInQuestion + ' is on the list');
} else {
    console.log(ingredientInQuestion + ' is not on the list');
}
