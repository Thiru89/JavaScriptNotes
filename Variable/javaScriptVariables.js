console.log("Working with Variables");

// Variables can be declared and can be assigned with values later in the program
var a;
a =10;
console.log(a);
// Same variables can be updated on this case only the latest data will be displayed.
a =20
console.log(a);

// Constant variables will be same through out the program.
const Age = 25;
console.log(Age);
// Updating constant variables later in the program will through error 
// Age =30
// console.log(Age);
// Constant variables should always be assigned with value while it is declared.
//otherwise it will through error.
// const firstName;
// firstName="Rocky"
// console.log(firstName);
//You can over ride the value of const variable by using let.

{
    let Age =30
    console.log(Age);
}

// firstName = Camelcase
// first_name = Snakecase
// FirstName = Pascal case
