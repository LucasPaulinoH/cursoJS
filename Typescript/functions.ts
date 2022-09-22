//first example
const sum = (x : number, y: number) : number /* retorno é opcional */ => {
  return x + y;
}

console.log(sum(55,33));

//second example
const stringSum = (x:number, y:number) : number | string=>{
  return (x+y).toString();
}

console.log(stringSum(55,33));