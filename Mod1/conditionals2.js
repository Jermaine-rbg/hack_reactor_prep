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