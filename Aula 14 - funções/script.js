console.log('Exemplo 1\n=========');

function parimp(n){ //função que testa se o número passado é par ou ímpar
  if (n % 2 == 0) {
    return 'par';
  } else {
    return 'ímpar';
  }
}

console.log(`O número ${5} é ${parimp(5)}.`);

console.log('=========');
console.log('Exemplo 2\n=========');

function fatorial(n){
  let fat = 1;
  for(let i = n; i > 1; i--){
    fat *= i;
  }
  return fat;
}

console.log(fatorial(5));

console.log('=========');
console.log('Exemplo 3\n=========');

function fatRecursivo(n){
  if(n == 1){
    return 1;
  }
  return n * fatRecursivo(n - 1);
}

console.log(fatRecursivo(7));

console.log('=========');
console.log('Exemplo 4\n=========');

let v = function(x){
  return x*2;
}

console.log(`O dobro de 5 é ${v(5)}.`);