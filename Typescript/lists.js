//normal way
var list1 = [1, 2, 3];
//using array
var list2 = [1, 2, 3];
//how to declare a list tuple of types
var person1 = ["Lucas", 20];
/*
   OBS.: once declared, the sequence of types must be respected.
   WRONG: person1 = [20,'Lucas'] or person1 = ['Lucas','Male',20]
 */
//using enums
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Blue"] = 1] = "Blue";
    Color[Color["Green"] = 2] = "Green";
})(Color || (Color = {}));
var c = Color.Green;
console.log(c);
