let num = document.getElementById('num');
let tab = document.getElementById('tab');
let res = document.getElementById('res');

let vetor = [];

function isNumero(n){
  if (n >= 1 && n <= 100) {
    return true;
  } else {
    return false;
  }
}

function inLista(n,l){
  if (l.indexOf(Number(n)) != -1) {
    return true;
  } else {
    return false
  }
}

function adicionar(){
  if (isNumero(num.value) && !inLista(num.value,vetor)) {
    vetor.push(Number(num.value));
    let item = document.createElement('option');
    item.text = `Valor ${num.value} adicionado`;
    tab.appendChild(item);
  } else {
    alert('Valor inválido ou número já adicionado à lista!');
  }
  num.value = '';
  num.focus();
}

function finalizar(){
  if (vetor.length == 0) {
    alert('Adicione valores antes de finalizar!');
  } else {
    let total = vetor.length;
    let maior = vetor[0];
    let menor = vetor[0];
    let soma = 0;
    let media = 0;

    for(let pos in vetor){
      soma += vetor[pos];

      if (vetor[pos] > maior){
        maior = vetor[pos];
      } 
      if (vetor[pos] < menor){
        menor = vetor[pos];
      } 
    }

    media = soma/total;
    res.innerHTML = '';
    res.innerHTML += `Ao todo, temos ${total} números cadastrados;<br>`;
    res.innerHTML += `O maior valor dentre os digitados é ${maior};<br>`;
    res.innerHTML += `O menor valor dentre os digitados é ${menor};<br>`;
    res.innerHTML += `A soma de todos os valores é ${soma};<br>`;
    res.innerHTML += `A média dos valores é ${media};`;
  }
}

