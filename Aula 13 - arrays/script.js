let array = [5,8,4];
array[3] = 6;
array.push(7);

array.sort(); //deixa o array ordenado

console.log(array);
console.log(`Vetor de tamanho: ${array.length}`);

console.log('Este são os elementos individuais do vetor: ');

for(let i = 0; i < array.length; i++){
  console.log(array[i]);
}

console.log('=========================');

for(let pos in array){ //para cada posição do array
  console.log(array[pos]);
}

console.log('=========================');

console.log(`O 7 está na ${array.indexOf(7)}a posição`); //retorna o valor do index que contém o valor 3


