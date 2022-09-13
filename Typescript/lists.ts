//normal way
let list1: number[] = [1, 2, 3];

//using array
let list2: Array<number> = [1, 2, 3];

//how to declare a list tuple of types
let person1: [string, number] = ["Lucas", 20];

/* 
   OBS.: once declared, the sequence of types must be respected. 
   WRONG: person1 = [20,'Lucas'] or person1 = ['Lucas','Male',20]
 */

//using enums
enum Color {
  Red,
  Blue,
  Green,
}
let c: Color = Color.Green;

console.log(c);
