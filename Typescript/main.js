"use strict";
exports.__esModule = true;
//standard js is accepted
var message = "Hello World!";
console.log(message);
//basic ts string declaration
var name = "Lucas Paulino";
//basic ts number declaration
var age = 20;
//showing the result
console.log("".concat(name, ", ").concat(age, " years old."));
//the type any 
//all the code below is valid ==============
var randomValue = 10;
randomValue = "Something";
randomValue = true;
//all the code above is valid ==============
