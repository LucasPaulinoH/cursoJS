export {};

//standard js is accepted
let message = "Hello World!";
console.log(message);

//basic ts string declaration
const name: string = "Lucas Paulino";

//basic ts number declaration
const age: number = 20;

//showing the result
console.log(`${name}, ${age} years old.`);

//the type any

//all the code below is valid ==============
let randomValue: any = 10;
randomValue = "Something";
randomValue = true;
/* OBS.: with the any type we can acess all of the other types 
   properties. */
//all the code above is valid ==============
