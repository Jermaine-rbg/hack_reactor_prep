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
let password = 'Cripboys';

if (password.length < 15 && password.length > 4){
    console.log('password is long enough');
};

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
