const numbers = [1, 2, 3, 4, 5];

//exemplo do uso de map
const numbersMultipliedByTwo = numbers.map(function (number) {
  return number * 2;
});

console.log(numbersMultipliedByTwo);
/* output: [2,4,6,8,10] */

//exemplo do uso de filter
const ages = [20, 21, 14, 60];
const evenAges = ages.filter(function (age) {
  return age % 2 == 0;
});

console.log(evenAges);
/* output: [20,14,60] */

//exemplo do uso de reduce
const sumOfAges = ages.reduce(function (age, accumulator) {
  return accumulator + age;
}, 0);

console.log(sumOfAges);
/* output: 115 */
